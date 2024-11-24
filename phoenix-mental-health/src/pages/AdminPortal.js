import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminCalendar from '../components/AdminCalendar.js';
import { FaUser } from 'react-icons/fa';

const AdminPortal = () => {
  const [user, setUser] = useState(null);
  const [userAppointments, setUserAppointments] = useState([]);
  const [isCancellingAppointment, setIsCancellingAppointment] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState('');
  const [isAddingHours, setIsAddingHours] = useState(false);
  const [isDeletingHours, setIsDeletingHours] = useState(false);
  const [newAppointmentDate, setNewAppointmentDate] = useState('');
  const [openAppointments, setOpenAppointments] = useState([]);
  const [selectedOpenAppointmentId, setSelectedOpenAppointmentId] = useState('');  
  const navigate = useNavigate();

  // Check if user is logged in and is admin when component mounts
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch('/api/user/session');
        const data = await response.json();

        if (!data.logged_in || data.role !== 2) {
          navigate('/'); // Redirect to home if not logged in or not admin
        } else {
          setUser(data.email);
        }
      } catch (error) {
        console.error('Failed to check session:', error);
        navigate('/Login');
      }
    };

    checkSession();
    fetchUserAppointments();
  }, [navigate]);

  // Fetch all user appointments (excluding past dates)
  const fetchUserAppointments = async () => {
    try {
      const response = await fetch('/api/user/admin/all-appointments');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUserAppointments(data);
    } catch (error) {
      console.error('Failed to fetch user appointments:', error);
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

  const handleCancelAppointment = async () => {
    if (!selectedAppointmentId) {
      alert('Please select an appointment to cancel.');
      return;
    }
  
    const confirmCancel = window.confirm('Are you sure you want to cancel this appointment?');
    if (!confirmCancel) {
      return;
    }
  
    try {
      const response = await fetch('/api/user/admin/cancel-user-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ appointmentId: selectedAppointmentId }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Appointment cancelled successfully!');
        // Remove the cancelled appointment from userAppointments
        setUserAppointments(userAppointments.filter((appt) => appt.id !== parseInt(selectedAppointmentId)));
        // Reset the selection
        setSelectedAppointmentId('');
        // Optionally, refresh appointments
        fetchUserAppointments();
      } else {
        alert(`Failed to cancel appointment: ${data.message}`);
      }
    } catch (error) {
      console.error('Error cancelling appointment:', error);
      alert('An error occurred while cancelling the appointment.');
    }
  };

  const fetchOpenAppointments = async () => {
    try {
      const response = await fetch('/api/user/admin/open-appointments');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setOpenAppointments(data);
    } catch (error) {
      console.error('Failed to fetch open appointments:', error);
    }
  };

  const handleAddAppointmentHour = async () => {
    if (!newAppointmentDate) {
      alert('Please select a date and time.');
      return;
    }
  
    try {
      const response = await fetch('/api/user/admin/add-appointment-hour', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date: newAppointmentDate }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Appointment hour added successfully!');
        setNewAppointmentDate('');
      } else {
        alert(`Failed to add appointment hour: ${data.message}`);
      }
    } catch (error) {
      console.error('Error adding appointment hour:', error);
      alert('An error occurred while adding the appointment hour.');
    }
  };

  const handleDeleteAppointmentHour = async () => {
    if (!selectedOpenAppointmentId) {
      alert('Please select an open appointment to delete.');
      return;
    }
  
    const confirmDelete = window.confirm('Are you sure you want to delete this appointment hour?');
    if (!confirmDelete) {
      return;
    }
  
    try {
      const response = await fetch('/api/user/admin/delete-appointment-hour', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ appointmentId: selectedOpenAppointmentId }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Appointment hour deleted successfully!');
        // Remove the deleted appointment from openAppointments
        setOpenAppointments(openAppointments.filter((appt) => appt.id !== parseInt(selectedOpenAppointmentId)));
        // Reset the selection
        setSelectedOpenAppointmentId('');
      } else {
        alert(`Failed to delete appointment hour: ${data.message}`);
      }
    } catch (error) {
      console.error('Error deleting appointment hour:', error);
      alert('An error occurred while deleting the appointment hour.');
    }
  };
  
  
  

  // Functions for admin actions will be added here
  // ...

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-background w-1/4 p-4 shadow-lg flex flex-col items-center space-y-4">
        {/* Profile Section */}
        <div className="flex items-center space-x-2 p-4 border border-darkGreen rounded-full">
          <FaUser className="text-darkGreen" />
          <span className="text-darkGreen font-bold text-lg">
            Admin
          </span>
        </div>

        {/* Sidebar Navigation */}
        <button
        onClick={() => {
            setIsCancellingAppointment(true);
            setIsAddingHours(false);
            setIsDeletingHours(false);
        }}
        className="w-full bg-darkGreen text-white py-2 rounded-full font-semibold uppercase hover:bg-darkGreenHover"
        >
        Cancel Appointment
        </button>
        <button
        onClick={() => {
            setIsAddingHours(true);
            setIsCancellingAppointment(false);
            setIsDeletingHours(false);
        }}
        className="w-full bg-darkGreen text-white py-2 rounded-full font-semibold uppercase hover:bg-darkGreenHover"
        >
        Add Appointment Hours
        </button>
        <button
        onClick={() => {
            setIsDeletingHours(true);
            setIsAddingHours(false);
            setIsCancellingAppointment(false);
            fetchOpenAppointments();
        }}
        className="w-full bg-darkGreen text-white py-2 rounded-full font-semibold uppercase hover:bg-darkGreenHover"
        >
        Delete Appointment Hours
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
        <h1 className="text-2xl font-bold text-darkGreen mb-4">Admin Dashboard</h1>

        {isAddingHours ? (
        // Add Appointment Hours UI
        <div className="bg-white shadow-md p-4 rounded-lg">
            <p className="mb-2 font-semibold">Add a new available appointment time.</p>
            <input
            type="datetime-local"
            value={newAppointmentDate}
            onChange={(e) => setNewAppointmentDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button
            onClick={handleAddAppointmentHour}
            className="w-full bg-darkGreen text-white py-2 rounded-full font-semibold uppercase hover:bg-darkGreenHover"
            >
            Add Appointment Hour
            </button>
        </div>
        ) : isDeletingHours ? (
        // Delete Appointment Hours UI
        <div className="bg-white shadow-md p-4 rounded-lg">
            <p className="mb-2 font-semibold">Select an open appointment to delete.</p>
            <select
            value={selectedOpenAppointmentId}
            onChange={(e) => setSelectedOpenAppointmentId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            >
            <option value="" disabled>
                Select an open appointment
            </option>
            {openAppointments.length > 0 ? (
                openAppointments.map((appt) => (
                <option key={appt.id} value={appt.id}>
                    {new Date(appt.date).toLocaleString()}
                </option>
                ))
            ) : (
                <option disabled>No open appointments available</option>
            )}
            </select>
            <button
            onClick={handleDeleteAppointmentHour}
            className="w-full bg-darkGreen text-white py-2 rounded-full font-semibold uppercase hover:bg-red-700"
            >
            Delete Appointment Hour
            </button>
        </div>
        ) : isCancellingAppointment ? (
            // Appointment cancellation UI
            <div className="bg-white shadow-md p-4 rounded-lg">
            <p className="mb-2 font-semibold">Select an appointment to cancel.</p>
            <select
                value={selectedAppointmentId}
                onChange={(e) => setSelectedAppointmentId(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            >
                <option value="" disabled>
                Select an appointment
                </option>
                {userAppointments.length > 0 ? (
                userAppointments.map((appt) => (
                    <option key={appt.id} value={appt.id}>
                    {`Appointment ID: ${appt.id}, User email: ${appt.user.email}, Date: ${new Date(appt.date).toLocaleString()}`}
                    </option>
                ))
                ) : (
                <option disabled>No upcoming appointments</option>
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
            <AdminCalendar appointments={userAppointments} />
            </div>
        )}
        </main>
    </div>
  );
};

export default AdminPortal;
