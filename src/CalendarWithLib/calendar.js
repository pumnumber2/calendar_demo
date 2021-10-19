import React, { useContext } from 'react';
import Calendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { eventClick } from './businessLogic';

import { EventListContext, DispatchContext } from '../Context/EventListContext'

const CalendarApp = () => {
  const eventListObject = useContext(EventListContext);
  const dispatch = useContext(DispatchContext);
  const { eventList } = eventListObject;
  return (
    <Calendar
      plugins={[
        dayGridPlugin,
        timeGridPlugin,
      ]}
      events={Object.values(eventList)}
      initialView="dayGridMonth"
      eventColor="steelblue"
      eventTextColor="white"
      displayEventEnd
      height="auto"
      eventDisplay="block"
      eventTimeFormat={{
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }}
      eventClick={(eventClickInfo) => {
        eventClick(eventClickInfo, dispatch);
      }}
    />
  );
};

export default CalendarApp;