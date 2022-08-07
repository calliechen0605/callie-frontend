/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { Form } from 'antd-mobile';
import PropTypes from 'prop-types';
import DatePickerInput from '@components/DatePickerInput';
import TInput from '@components/TInput';
import Footer from './Footer';

import style from '../index.module.scss';

/**
 * Registration Page
 */
const StepOne = ({
  gotoNextStepHandler,
}) => {
  const [form] = Form.useForm();
  const [formData] = useState({
    name: '',
    tel: '',
    email: '',
    birthday: '',
  });

  const ACCOUNT_TYPE = {
    TEL: 0,
    EMAIL: 1,
  };

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.TEL);
  const [footerButtonDisabled, setFooterButtonDisabled] = useState(true);

  const onAccountTypeChange = () => {
    if (accountType === ACCOUNT_TYPE.TEL) {
      setAccountType(ACCOUNT_TYPE.EMAIL);
      return;
    }
    setAccountType(ACCOUNT_TYPE.TEL);
  };

  const onClickNextStep = async () => {
    const validate = await form.validateFields();
    if (validate) {
      gotoNextStepHandler(validate);
    }
  };

  const onValuesChange = async () => {
    try {
      const validate = await form.validateFields();
      if (validate) {
        setFooterButtonDisabled(false);
        return;
      }
    } catch (e) {
      if (e.errorFields.length === 0) {
        setFooterButtonDisabled(false);
        return;
      }
      setFooterButtonDisabled(true);
    }
  };

  return (
    <div>
      <div className={style.form}>
        <div className={style.formTitle}>Create Your Account</div>
        <Form
          form={form}
          initialValues={formData}
          onValuesChange={onValuesChange}
          className={style.formContainer}
        >
          <Form.Item name="name" rules={[{ required: true, message: "Username can't be empty" }]}>
            <TInput length={10} label="Name" />
          </Form.Item>
          {accountType === ACCOUNT_TYPE.TEL && (
          <Form.Item
            name="tel"
            rules={[{
              required: true, message: 'Please enter a valid phone number', pattern: /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g,
            }]}
          >
            <TInput length={50} label="Phone" />
          </Form.Item>
          )}
          {accountType === ACCOUNT_TYPE.EMAIL && (
          <Form.Item name="email" rules={[{ required: true, message: 'Please enter a valid email address', pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g }]}>
            <TInput label="Email" />
          </Form.Item>
          )}
          <span className={style.changeTypeButton} onClick={onAccountTypeChange}>
            {accountType === 'tel' ? 'Use email instead' : 'Use phone number instead'}
          </span>
          <div className={style.birthdayTitle}>Date of birth</div>
          <div>
            This will not be shown publicly.
            Confirm your own age, even if this account
            is for a business, a pet, or something else.
          </div>
          <Form.Item name="birthday">
            <DatePickerInput />
          </Form.Item>
        </Form>
      </div>
      <Footer label="Next" disabled={footerButtonDisabled} onClickNextStep={onClickNextStep} />
    </div>
  );
};
StepOne.prototype = {
  gotoNextStepHandler: PropTypes.func.isRequired,
};

export default StepOne;
