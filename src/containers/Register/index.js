/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { Input, Button, Form } from 'antd-mobile';
import DatePickerInput from '@components/DatePickerInput';
import Header from '@components/Header';

import style from './index.module.scss';

/**
 * Registration Page
 */
const Register = () => {
  const [form] = Form.useForm();
  const [formData] = useState({
    name: 'calliechen',
    tel: '',
    email: '',
    birthday: '2022-02-03',
  });

  const ACCOUNT_TYPE = {
    TEL: 0,
    EMAIL: 1,
  };

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.TEL);

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
      const data = form.getFieldValue();
      console.log(validate);
    }
  };

  return (
    <div>
      <Header />
      <div className={style.form}>
        <div className={style.formTitle}>Create Your Account</div>
        <Form form={form} initialValues={formData} className={style.formContainer}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Username can't be empty" }]}
          >
            <Input placeholder="Name" className={style.input} />
          </Form.Item>
          {accountType === ACCOUNT_TYPE.TEL && (
          <Form.Item
            name="tel"
            rules={[{ required: true, message: "Phone number can't be empty" }]}
          >
            <Input placeholder="Phone" className={style.input} />
          </Form.Item>
          )}
          {accountType === ACCOUNT_TYPE.EMAIL && (
          <Form.Item 
            name="email"
            rules={[{ required: true, message: "Email can't be empty" }]}
          >
            <Input placeholder="Email" className={style.input} />
          </Form.Item>
          )}
          <div className={style.changeTypeButton} onClick={onAccountTypeChange}>
            {accountType === 'tel' ? 'Use email instead' : 'Use phone number instead'}
          </div>
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
      <div className={style.footer}>
        <Button className={style.footerButton} onClick={onClickNextStep}>Next</Button>
      </div>
    </div>
  );
};

export default Register;
