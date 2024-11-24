import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MyCalendar from '../components/Calendar';
import { FaUser } from 'react-icons/fa';

const UserPortal = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [openTimes, setOpenTimes] = useState([]);
  const [isRequestingAppointment, setIsRequestingAppointment] = useState(false);
  const [isCancellingAppointment, setIsCancellingAppointment] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState('');
  const [userAppointments, setUserAppointments] = useState([]);
  const [selectedUserAppointmentId, setSelectedUserAppointmentId] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user is logged in when component mounts
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch('/api/user/session');
        const data = await response.json();
        
        if (!data.logged_in) {
          navigate('/'); // Redirect to home if not logged in
        } else {
          setUser(data.email);
          setRole(data.role);
        }
      } catch (error) {
        console.error('Failed to check session:', error);
        navigate('/Login');
      }
    };

    checkSession();
    fetchOpenTimes();
  }, [navigate, location]);

  useEffect(() => {
    if (role === 2) {
      navigate('/AdminPortal'); // Redirect to admin portal
    }
  }, [role, navigate]);


  // Fetch available open times for appointments
  const fetchOpenTimes = async () => {
    try {
      // Define the start date (e.g., today)
      const today = new Date();
  
      // Format the start date as YYYY-MM-DD
      const formatDate = (date) => {
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
      };
  
      const startDateStr = formatDate(today);
  
      // Fetch open times from the server
      const response = await fetch(`/api/user/open-times/${startDateStr}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setOpenTimes(data);
    } catch (error) {
      console.error('Failed to fetch open times:', error);
    }
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await fetch('/api/user/logout', { method: 'POST' });
      navigate('/'); // Redirect to home after logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const fetchUserAppointments = async () => {
    try {
      const response = await fetch('/api/user/my-appointments');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUserAppointments(data);
    } catch (error) {
      console.error('Failed to fetch user appointments:', error);
    }
  };

  const handleReserveAppointment = async () => {
    if (!selectedAppointmentId) {
      alert('Please select an appointment.');
      return;
    }

    try {
      const response = await fetch('/api/user/reserve-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ appointmentId: selectedAppointmentId }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Appointment reserved successfully!');
        // Remove the reserved appointment from openTimes
        setOpenTimes(openTimes.filter((appt) => appt.id !== parseInt(selectedAppointmentId)));
        // Reset the selection
        setSelectedAppointmentId('');
        // Optionally, switch back to the calendar view
        setIsRequestingAppointment(false);
      } else {
        alert(`Failed to reserve appointment: ${data.message}`);
      }
    } catch (error) {
      console.error('Error reserving appointment:', error);
      alert('An error occurred while reserving the appointment.');
    }
  };

  const handleCancelAppointment = async () => {
    if (!selectedUserAppointmentId) {
      alert('Please select an appointment to cancel.');
      return;
    }
  
    const confirmCancel = window.confirm('Are you sure you want to cancel this appointment?');
    if (!confirmCancel) {
      return;
    }
  
    try {
      const response = await fetch('/api/user/cancel-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ appointmentId: selectedUserAppointmentId }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Appointment cancelled successfully!');
        // Remove the cancelled appointment from userAppointments
        setUserAppointments(userAppointments.filter((appt) => appt.id !== parseInt(selectedUserAppointmentId)));
        // Reset the selection
        setSelectedUserAppointmentId('');
        // Optionally, switch back to the default view
        setIsCancellingAppointment(false);
        // Refresh open appointments
        fetchOpenTimes();
      } else {
        alert(`Failed to cancel appointment: ${data.message}`);
      }
    } catch (error) {
      console.error('Error cancelling appointment:', error);
      alert('An error occurred while cancelling the appointment.');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-background w-1/4 p-4 shadow-lg flex flex-col items-center space-y-4">
        {/* Profile Section */}
        <div className="flex items-center space-x-2 p-4 border border-darkGreen rounded-full">
          <FaUser className="text-darkGreen" />
          <span className="text-darkGreen font-bold text-lg">
            {user || 'User'}
          </span>
        </div>

        {/* Sidebar Navigation */}
        <button
          className="w-full bg-darkGreen text-white py-2 rounded-full font-semibold uppercase hover:bg-darkGreenHover"
          onClick={() => {
            setIsRequestingAppointment(true);
            setIsCancellingAppointment(false);
          }}
        >
          Request Appointment
        </button>
        <button
          className="w-full bg-darkGreen text-white py-2 rounded-full font-semibold uppercase hover:bg-darkGreenHover"
          onClick={() => {
            setIsCancellingAppointment(true);
            setIsRequestingAppointment(false);
            fetchUserAppointments();
          }}
        >
          Cancel Appointment
        </button>
        <button
          onClick={() => navigate('/Contact')}
          className="w-full bg-darkGreen text-white py-2 rounded-full font-semibold uppercase hover:bg-darkGreenHover"
        >
          Contact
        </button>
        <button
          onClick={handleLogout}
          className="w-full bg-darkGreen text-white py-2 rounded-full font-semibold uppercase hover:bg-darkGreenHover"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
      <h1 className="text-2xl font-bold text-darkGreen mb-4">
        {isRequestingAppointment
          ? 'Select an Appointment to Reserve'
          : isCancellingAppointment
          ? 'Select an Appointment to Cancel'
          : 'Appointment Dashboard'}
      </h1>

        {isRequestingAppointment ? (
          // Appointment selection UI
          <div className="bg-white shadow-md p-4 rounded-lg">
            <p className="mb-2 font-semibold">Each appointment is 1 hour long.</p>
            <select
              value={selectedAppointmentId}
              onChange={(e) => setSelectedAppointmentId(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            >
              <option value="" disabled>Select an appointment</option>
              {openTimes.map((appt) => (
                <option key={appt.id} value={appt.id}>
                  {new Date(appt.date).toLocaleString()}
                </option>
              ))}
            </select>
            <button
              onClick={handleReserveAppointment}
              className="w-full bg-darkGreen text-white py-2 rounded-full font-semibold uppercase hover:bg-darkGreenHover"
            >
              Reserve
            </button>
          </div>
        ) : isCancellingAppointment ? (
          // Appointment cancellation UI
          <div className="bg-white shadow-md p-4 rounded-lg">
            <p className="mb-2 font-semibold">Select an appointment to cancel.</p>
            <select
              value={selectedUserAppointmentId}
              onChange={(e) => setSelectedUserAppointmentId(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            >
              <option value="" disabled>
                Select an appointment
              </option>
              {userAppointments.length > 0 ? (
                userAppointments.map((appt) => (
                  <option key={appt.id} value={appt.id}>
                    {new Date(appt.date).toLocaleString()}
                  </option>
                ))
              ) : (
                <option disabled>You have no upcoming appointments</option>
              )}
            </select>
            <button
              onClick={handleCancelAppointment}
              className="w-full bg-darkGreen text-white py-2 rounded-full font-semibold uppercase hover:bg-red-700"
            >
              Cancel Appointment
            </button>
          </div>
        ) : (
          // Calendar
          <div className="bg-white shadow-md p-4 rounded-lg">
            <MyCalendar openTimes={openTimes} />
          </div>
        )}
      </main>
    </div>
  );
};

export default UserPortal;
