import './App.css';
import { rawEventList } from './Constant/Constant';
import { eventListModel } from './Model/calendarEventModel';
import CalendarApp from './CalendarWithLib/calendar'

function App() {
  const eventList = eventListModel(rawEventList);
  return (
    <div className="App">
      <div className="calendar-app-container">
        <CalendarApp
          eventList={eventList}
        />
      </div>
    </div>
  );
};

export default App;
