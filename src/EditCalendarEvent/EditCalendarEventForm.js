import './editCalenarEventForm.css';
import React, { useContext, useState } from 'react';
import moment from 'moment';
import { DatePicker, Input, Button, Modal } from 'antd';
import { DispatchContext, EventListContext } from '../Context/EventListContext'

const { RangePicker } = DatePicker;

const EditCalendarEventForm = () => {
  const { eventList, selectedEventID } = useContext(EventListContext);
  const dispatch = useContext(DispatchContext);
  const selectedEventDetail = eventList[selectedEventID];
  const { title, start, end } = selectedEventDetail || {};
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <div id="edit-event-form-container">
      {selectedEventID ? (
        <div className="edit-form-container">
          <div className="form-item">
            <div className="text-input-placeholder" id="title">
              Name
            </div>
            <Input
              onChange={(e) => {
                dispatch({ type: 'UPDATE_KEY', id: selectedEventID, key: 'title', value: e.target.value });
              }}
              id="title"
              type="text"
              value={title}
            />
          </div>
          <div className="text-input-placeholder" id="start">
            Duration
          </div>
          <div style={{ width: '100%' }}>
            <RangePicker
              style={{ width: '100%' }}
              showTime={{ format: 'HH:mm' }}
              format="YYYY-MM-DD HH:mm"
              value={[moment(start), moment(end)]}
              allowClear={false}
              onChange={(value) => {
                dispatch({
                  type: 'UPDATE_MULTI_KEY',
                  id: selectedEventID,
                  updateList: [{
                    key: 'start',
                    value: value[0].valueOf(),
                  }, {
                    key: 'end',
                    value: value[1].valueOf(),
                  }],
                });
              }}
            />
          </div>
          <Button
            type="primary"
            className="remove-event-btn"
            danger
            onClick={() => {
              setVisibleModal(true);
            }}
          >
            Remove This Event
          </Button>
          <Modal
            title="Delete Event"
            visible={visibleModal}
            onOk={() => {
              dispatch({ type: 'REMOVE_EVENT', id: selectedEventID });
              setVisibleModal(false);
            }}
            onCancel={() => setVisibleModal(false)}
          >
            Are you sure to delete this event ?
          </Modal>
        </div>
      ) : (
        <div className="notice-text" id="select-event-to-edit-detail">
          Click at event to edit event or click <span onClick={() => { dispatch({ type: 'ADD_EVENT' }) }} className="add-event-btn">Here</span> to add event
        </div>
      )}
    </div>
  );
};

export default EditCalendarEventForm;