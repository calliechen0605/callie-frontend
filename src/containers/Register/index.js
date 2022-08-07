/* eslint-disable jsx-a11y/click-events-have-key-events */
import { registerUser } from '@services/register';
import { Toast } from 'antd-mobile';
import { useState } from 'react';
import Header from '@components/Header';
import Display from '@components/Display';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';

// Registration Step Identifiers
const STEP = {
  ONE: 1,
  TWO: 2,
};
/**
 * Registration Page
 */
const Register = () => {
  const [step, setStep] = useState(STEP.ONE);
  const [userInfo, setUserInfo] = useState({});

  const gotoNextStepHandler = (data) => {
    setUserInfo(data);
    setStep(STEP.TWO);
  };

  const confirmRegistrationHandler = async (password) => {
    const res = await registerUser({
      password,
      ...userInfo,
    });
    if (res.success) {
      Toast.show('Login Successfully');
      return;
    }
    Toast.show('Login Failed');
  };

  // const onClickClose = () => {
  // setStep(STEP.ONE);
  // };

  return (
    <div>
      <Display visible={step === STEP.ONE}>
        <StepOne gotoNextStepHandler={gotoNextStepHandler} />
      </Display>

      <Display visible={step === STEP.TWO}>
        <StepTwo
          userInfo={userInfo}
          confirmRegistrationHandler={confirmRegistrationHandler}
        />
      </Display>

    </div>
  );
};

export default Register;
