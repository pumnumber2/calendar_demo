import Calendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

const calendar = (props) => {
  const { eventList } = props;
  return (
    <Calendar
      plugins={[
        dayGridPlugin,
        timeGridPlugin,
      ]}
      events={eventList}
      initialView="dayGridMonth"
      height="100%"
      eventColor="yellow"
      eventTextColor="black"
    />
  );
};

export default calendar;