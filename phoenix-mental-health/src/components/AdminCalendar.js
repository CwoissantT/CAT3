import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const AdminCalendar = ({ appointments }) => {
  // console.log(appointments);
  // Transform appointments into events compatible with the Calendar component
  const events = appointments.map((appt) => ({
    id: appt.id,
    email: appt.user.email,
    title: `Appointment with User: ${appt.user.email}`,
    start: new Date(appt.date),
    end: new Date(new Date(appt.date).getTime() + 60 * 60 * 1000), // Assuming 1 hour duration
    allDay: false,
  }));

  return (
    <div className="p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectEvent={(event) => alert(`Selected appointment ID: ${event.id}, User email: ${event.email}`)}
      />
    </div>
  );
};

export default AdminCalendar;
