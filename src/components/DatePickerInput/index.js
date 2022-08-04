import { DatePicker } from 'antd-mobile';
import { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import style from './index.module.css';
import datepickerIcon from '../../assets/datepicker-icon.svg';

/**
 * Choose a date
 */
const DatePickerInput = ({
  value,
  onChange,
}) => {
  const [visible, setVisible] = useState(false);

  const onClickDatePicker = () => {
    setVisible(true);
  };
  return (
    <>
      <DatePicker
        title="Please Choose a Date"
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        onConfirm={(val) => {
          onChange(val);
        }}
      />
      <div className={style.birthdayInput} onClick={onClickDatePicker}>
        <div className={style.birthdayTitleItem}>Date of birth</div>
        <div>
          <span className={style.birthdayPlaceholder}>{value ? moment(value).format('YYYY-MM-DD') : 'YYYY-MM-DD'}</span>
          <img className={style.datepickerIcon} src={datepickerIcon} alt="datepickerIcon" />
        </div>
      </div>
    </>
  );
};

DatePickerInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DatePickerInput;
