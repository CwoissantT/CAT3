import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US'; // Use the appropriate locale
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../component-css/Calendar.css';


const locales = {
    'en-US': enUS,
  };
  
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });
  

const MyCalendar = ({ openTimes }) => {
  // Transform openTimes into events compatible with the Calendar component
  const events = openTimes.map((appt) => ({
    id: appt.id,
    title: 'Available',
    start: new Date(appt.date),
    end: new Date(appt.date), // If you have a duration, adjust the end time accordingly
    allDay: false, // or true if the appointment spans the whole day
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
        onSelectEvent={(event) => alert(`Selected event: ${event.title} at ${event.start}`)}
      />
    </div>
  );
};

export default MyCalendar;
