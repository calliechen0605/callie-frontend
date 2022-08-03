import style from './index.module.css';
import datepickerIcon from '../../assets/datepicker-icon.svg';

export default () => (
  <div className={style.birthdayInput}>
    <div className={style.birthdayTitleItem}>Date of birth</div>
    <div>
      <span className={style.birthdayPlaceholder}>YYYY-MM-DD</span>
      <img className={style.datepickerIcon} src={datepickerIcon} alt="datepickerIcon" />
    </div>
  </div>
);
