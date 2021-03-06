import React, { PropTypes } from 'react';
import { TransitionView, Calendar } from 'react-date-picker';

import Modal from '../Modal';


const propTypes = {
  open: PropTypes.bool.isRequired,
  defaultDate: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

const TimePickerModal = props => props.open &&
  <Modal onClose={props.onClose} className="time-picker">
    <div className="flex-col">
      <TransitionView>
        <Calendar
          dateFormat="YYYY-MM-DD HH:mm:ss"
          defaultDate={props.defaultDate || ''}
          onChange={(dateString) =>
              props.onChange(dateString)}
        />
      </TransitionView>
      <button
        className="btn btn-primary btn--absolute"
        onClick={props.onClose}
      >
        Apply
      </button>
    </div>
  </Modal>;

TimePickerModal.propTypes = propTypes;

export default TimePickerModal;
