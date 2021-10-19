const eventClick = (eventClickInfo, dispatch) => {
  const { event } = eventClickInfo;
  dispatch({ type: 'EVENT_CLICKED', id: event.id });
};

export { eventClick }