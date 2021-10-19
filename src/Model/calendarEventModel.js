const eventListModel = (eventList) => {
  return eventList.map(eventModel);
};

const convertDateTimeToTimeStamp = (dateString, time) => {
  const convertToNumber = str => Number(str);
  const [year, month, date] = dateString.split('-').map(convertToNumber);
  const [hour, minute] = time.split(':').map(convertToNumber);
  // Month is 0 based.
  return new Date(year, month - 1, date, hour, minute).valueOf();
};

const eventModel = (event) => {
  const { date, time, durationMinute, ...other } = event;
  const startTimeStamp = convertDateTimeToTimeStamp(date, time);
  const endTimeStamp = startTimeStamp + (durationMinute * 60 * 1000);
  return ({
    start: startTimeStamp,
    end: endTimeStamp,
    ...other,
  });
};

export { eventListModel };