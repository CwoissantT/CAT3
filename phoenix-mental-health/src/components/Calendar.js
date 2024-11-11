// src/components/Calendar/Calendar.js
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
  

const MyCalendar = () => {
  const [events, setEvents] = useState([
    // Sample event
    {
      title: 'Sample Event',
      start: new Date(),
      end: new Date(),
    },
  ]);

  return (
    <div className="p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MyCalendar;
