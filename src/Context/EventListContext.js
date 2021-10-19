import React, { createContext, useReducer } from 'react';
import EventListReducer from '../Reducer/EventListReducer';
import { rawEventList } from '../Constant/Constant'
import { eventListModel } from '../Model/calendarEventModel'

const EventListContext = createContext();
const DispatchContext = createContext();

const initialValue = {
  eventList: eventListModel(rawEventList),
  selectedEventID: '',
};

const EventListProvider = ({ children }) => {
  const [eventList, dispatch] = useReducer(EventListReducer, initialValue);
  return (
    <EventListContext.Provider value={eventList}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </EventListContext.Provider>
  )
};
export { EventListContext, DispatchContext, EventListProvider };