/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import Header from '@components/Header';
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
  const [userInfo, setUserInfo] = useState();

  const gotoNextStepHandler = (data) => {
    setUserInfo(data);
    setStep(STEP.TWO);
  };

  const confirmRegistrationHandler = (password) => {
    console.log({
      password,
      ...userInfo,
    });
  };

  return (
    <div>
      <Header />
      {step === STEP.ONE && <StepOne gotoNextStepHandler={gotoNextStepHandler} />}
      {step === STEP.TWO && (
      <StepTwo
        userInfo={userInfo}
        confirmRegistrationHandler={confirmRegistrationHandler}
      />
      )}

    </div>
  );
};

export default Register;
