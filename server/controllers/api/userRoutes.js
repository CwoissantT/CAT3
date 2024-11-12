const router = require('express').Router();
const { User } = require('../../models');

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
      // role: 1 // Set user role to 'user'
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
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
        attributes: ['email'] 
      });
      if (!user) {
        return res.json({ logged_in: false });
      }
      
      res.json({
        logged_in: true,
        email: user.email, 
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

module.exports = router;
