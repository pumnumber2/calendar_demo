import './App.css';
import CalendarApp from './CalendarWithLib/calendar'
import EditEventForm from './EditCalendarEvent/EditCalendarEventForm';
import { EventListProvider } from './Context/EventListContext';
import 'antd/dist/antd.css';

function App() {
  return (
    <EventListProvider>
      <div className="App">
        <div id="author-header">
          <h1>My Calendar App</h1>
          <h3>By Chutiwat Rojanachai</h3>
          <h3>Mark 1</h3>
        </div>
        <div className="calendar-app-container">
          <div className="calendar-content-container">
            <CalendarApp />
          </div>
        </div>
        <div className="calendar-edit-form-container">
          <EditEventForm />
        </div>
      </div>
    </EventListProvider>
  );
};

export default App;
