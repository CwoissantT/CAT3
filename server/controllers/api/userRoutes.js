const router = require('express').Router();
const { User, Open_Appts, User_Appts } = require('../../models');
const { Op } = require('sequelize');

const isAdmin = (req, res, next) => {
  if (req.session.logged_in && req.session.role === 2) {
    next();
  } else {
    res.status(403).json({ message: 'Access denied' });
  }
};

// Create user (signup)
router.post('/signup', async (req, res) => {
  try {
    console.log("signup");

    // Check for existing email only (no username)
    const existingEmail = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (existingEmail) {
      console.log('Email already exists');
      return res.status(400).json({ message: 'Email already exists.' });
    }

    // Create the user with only email and password, setting the default role as needed
    const userData = await User.create({
      email: req.body.email,
      password: req.body.password,
      role: 1 // Set user role to 'user'
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.role = userData.role;
      res.status(200).json(userData);
    });
  } catch (err) {
    console.error('Signup error:', err); // Log the error details
    console.log(req.body); // Log the request body for additional context
    res.status(400).json({ message: 'Signup failed. Please try again.', error: err.message });
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    console.log(req.body.email);

    // Find user by email instead of username
    const userData = await User.findOne({ where: { email: req.body.email } });

    // Check if userData exists before checking the password
    if (!userData) {
      return res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
    }

    // Check password
    const validPassword = await userData.checkPassword(req.body.password); // Assuming checkPassword is async

    if (validPassword) {
      // Save session and return success response
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        req.session.role = userData.role;
        res.json({ message: 'Login successful' });
      });
    } else {
      // Incorrect password
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get session information
router.get('/session', async (req, res) => {
  console.log('/session');
  if (req.session.logged_in) {
    try {
      const user = await User.findByPk(req.session.user_id, {
        attributes: ['email', 'role'], 
      });
      if (!user) {
        return res.json({ logged_in: false });
      }
      
      res.json({
        logged_in: true,
        email: user.email,
        role: user.role, 
      });
    } catch (error) {
      console.error('Failed to retrieve session user:', error);
      res.status(500).json({ message: 'Failed to retrieve session information.' });
    }
  } else {
    res.json({ logged_in: false });
  }
});



// Logout user
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to logout. Please try again.' });
      }
      res.status(200).json({ message: 'Successfully logged out.' });
    });
  } else {
    res.status(400).json({ message: 'No user is logged in.' });
  }
});

// Test route
router.get('/', (req, res) => {
  console.log("Test user route")
  res.json([
    { test: 'It hits the route though' },
  ]);
});



router.get('/open-times/:startDate', async (req, res) => {
  try {
    const { startDate: startDateStr } = req.params;

    // Parse the start date
    const startDate = new Date(startDateStr);

    // Validate the start date
    if (isNaN(startDate)) {
      return res.status(400).json({ message: 'Invalid start date format. Please use YYYY-MM-DD.' });
    }

    // Calculate the end date (4 weeks after the start date)
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 28);
    endDate.setHours(23, 59, 59, 999); // Include the entire day

    // Fetch open appointments within the date range
    const openTimesData = await Open_Appts.findAll({
      attributes: ['id', 'date'],
      where: {
        date: {
          [Op.between]: [startDate, endDate],
        },
      },
      order: [['date', 'ASC']],
    });

    // Convert the data to plain JavaScript objects
    const openTimes = openTimesData.map((appt) => appt.get({ plain: true }));

    // Send the open times as a JSON response
    res.json(openTimes);
  } catch (err) {
    console.error('Failed to get open times:', err);
    res.status(500).json({ message: 'Failed to retrieve open times.' });
  }
});

router.post('/reserve-appointment', async (req, res) => {
  try {
    const userId = req.session.user_id;
    if (!userId) {
      return res.status(401).json({ message: 'User not logged in' });
    }

    const { appointmentId } = req.body;
    if (!appointmentId) {
      return res.status(400).json({ message: 'No appointment ID provided' });
    }

    // Get the appointment date from open_appts
    const openAppointment = await Open_Appts.findByPk(appointmentId);
    if (!openAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Check if the appointment has already been reserved
    const existingUserAppt = await User_Appts.findOne({
      where: { date: openAppointment.date },
    });
    if (existingUserAppt) {
      return res.status(400).json({ message: 'Appointment has already been reserved.' });
    }

    // Create a new entry in user_appts
    const userAppointment = await User_Appts.create({
      user_id: userId,
      date: openAppointment.date,
    });

    // Remove the appointment from open_appts to prevent double booking
    await openAppointment.destroy();

    res.status(200).json({ message: 'Appointment reserved successfully' });
  } catch (err) {
    console.error('Error reserving appointment:', err);
    res.status(500).json({ message: 'Failed to reserve appointment' });
  }
});

router.get('/my-appointments', async (req, res) => {
  try {
    const userId = req.session.user_id;
    if (!userId) {
      return res.status(401).json({ message: 'User not logged in' });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const userAppointmentsData = await User_Appts.findAll({
      where: {
        user_id: userId,
        date: {
          [Op.gte]: today,
        },
      },
      order: [['date', 'ASC']],
    });

    const userAppointments = userAppointmentsData.map((appt) => appt.get({ plain: true }));

    res.json(userAppointments);
  } catch (err) {
    console.error('Failed to get user appointments:', err);
    res.status(500).json({ message: 'Failed to retrieve appointments.' });
  }
});

// Cancel appointment
router.post('/cancel-appointment', async (req, res) => {
  try {
    const userId = req.session.user_id;
    if (!userId) {
      return res.status(401).json({ message: 'User not logged in' });
    }

    const { appointmentId } = req.body;
    if (!appointmentId) {
      return res.status(400).json({ message: 'No appointment ID provided' });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Get the appointment from user_appts
    const userAppointment = await User_Appts.findOne({
      where: {
        id: appointmentId,
        user_id: userId,
        date: {
          [Op.gte]: today,
        },
      },
    });

    if (!userAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    const appointmentDate = userAppointment.date;

    // Delete the appointment from user_appts
    await userAppointment.destroy();

    // Add the appointment back to open_appts
    await Open_Appts.create({
      date: appointmentDate,
    });

    res.status(200).json({ message: 'Appointment cancelled successfully' });
  } catch (err) {
    console.error('Error cancelling appointment:', err);
    res.status(500).json({ message: 'Failed to cancel appointment' });
  }
});

// Get all user appointments (excluding past dates)
router.get('/admin/all-appointments', isAdmin, async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const appointmentsData = await User_Appts.findAll({
      where: {
        date: {
          [Op.gte]: today,
        },
      },
      order: [['date', 'ASC']],
    });

    const appointments = appointmentsData.map((appt) => appt.get({ plain: true }));

    res.json(appointments);
  } catch (err) {
    console.error('Failed to get appointments:', err);
    res.status(500).json({ message: 'Failed to retrieve appointments.' });
  }
});


// Cancel a user's appointment
router.post('/admin/cancel-user-appointment', isAdmin, async (req, res) => {
  try {
    const { appointmentId } = req.body;
    if (!appointmentId) {
      return res.status(400).json({ message: 'No appointment ID provided' });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Get the appointment from user_appts
    const userAppointment = await User_Appts.findOne({
      where: {
        id: appointmentId,
        date: {
          [Op.gte]: today,
        },
      },
    });

    if (!userAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    const appointmentDate = userAppointment.date;

    // Delete the appointment from user_appts
    await userAppointment.destroy();

    // // Add the appointment back to open_appts
    // await Open_Appts.create({
    //   date: appointmentDate,
    // });

    res.status(200).json({ message: 'Appointment cancelled successfully' });
  } catch (err) {
    console.error('Error cancelling appointment:', err);
    res.status(500).json({ message: 'Failed to cancel appointment' });
  }
});


// Get open appointments
router.get('/admin/open-appointments', isAdmin, async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const openAppointmentsData = await Open_Appts.findAll({
      order: [['date', 'ASC']],
      where: {
        date: {
          [Op.gte]: today,
        },
      },
    });

    const openAppointments = openAppointmentsData.map((appt) => appt.get({ plain: true }));

    res.json(openAppointments);
  } catch (err) {
    console.error('Failed to get open appointments:', err);
    res.status(500).json({ message: 'Failed to retrieve open appointments.' });
  }
});


// Add an appointment hour
router.post('/admin/add-appointment-hour', isAdmin, async (req, res) => {
  try {
    const { date } = req.body;
    if (!date) {
      return res.status(400).json({ message: 'No date provided' });
    }

    // Check if the appointment already exists in open_appts
    const existingAppt = await Open_Appts.findOne({
      where: { date },
    });
    if (existingAppt) {
      return res.status(400).json({ message: 'Appointment already exists in open appointments.' });
    }

    // Check if the appointment exists in user_appts
    const existingUserAppt = await User_Appts.findOne({
      where: { date },
    });
    if (existingUserAppt) {
      return res.status(400).json({ message: 'Appointment already booked by a user.' });
    }

    // Add the appointment to open_appts
    await Open_Appts.create({
      date,
    });

    res.status(200).json({ message: 'Appointment hour added successfully' });
  } catch (err) {
    console.error('Error adding appointment hour:', err);
    res.status(500).json({ message: 'Failed to add appointment hour' });
  }
});

// Delete an appointment hour
router.post('/admin/delete-appointment-hour', isAdmin, async (req, res) => {
  try {
    const { appointmentId } = req.body;
    if (!appointmentId) {
      return res.status(400).json({ message: 'No appointment ID provided' });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Get the appointment from open_appts
    const openAppointment = await Open_Appts.findOne({
      where: {
        id: appointmentId,
        date: {
          [Op.gte]: today, 
        },
      },
    });

    if (!openAppointment) {
      return res.status(404).json({ message: 'Open appointment not found' });
    }

    // Delete the appointment from open_appts
    await openAppointment.destroy();

    res.status(200).json({ message: 'Appointment hour deleted successfully' });
  } catch (err) {
    console.error('Error deleting appointment hour:', err);
    res.status(500).json({ message: 'Failed to delete appointment hour' });
  }
});





module.exports = router;
