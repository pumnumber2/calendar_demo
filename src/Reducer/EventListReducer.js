import { v4 as generateUniqueId } from 'uuid';
const eventListReducer = (state, { type, ...action }) => {
  switch (type) {
    case 'EVENT_CLICKED': {
      return ({
        ...state,
        selectedEventID: state.selectedEventID === action.id ? '' : action.id,
      });
    }
    case 'UPDATE_KEY': {
      const { key, value, id } = action;
      state.eventList[id] = {
        ...state.eventList[id],
        [key]: value,
      }; return { ...state };
    }
    case 'UPDATE_MULTI_KEY': {
      const { id, updateList } = action;
      const updatedObject = updateList.reduce((acc, cur) => {
        return ({ ...acc, [cur.key]: cur.value });
      }, {});
      state.eventList[id] = {
        ...state.eventList[id],
        ...updatedObject,
      };
      return { ...state };
    }
    case 'REMOVE_EVENT': {
      delete state.eventList[action.id];
      state.selectedEventID = '';
      return { ...state }
    }
    case 'ADD_EVENT': {
      const newEventID = generateUniqueId();
      const start = Date.now();
      const end = start + 3600000;
      state = {
        ...state,
        selectedEventID: newEventID,
        eventList: {
          ...state.eventList,
          [newEventID]: {
            id: newEventID,
            title: 'New Event',
            start,
            end,
          },
        },
      }
      return state;
    }
    default:
      return state;
  }
};

export default eventListReducer;