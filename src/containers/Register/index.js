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
  const [step, setStep] = useState(STEP.TWO);

  const gotoNextStepHandler = (data) => {
    console.log(data);
    setStep(STEP.TWO);
  };

  const confirmRegistrationHandler = () => {

  };

  return (
    <div>
      <Header />
      {step === STEP.ONE && <StepOne gotoNextStepHandler={gotoNextStepHandler} />}
      {step === STEP.TWO && (
      <StepTwo
        userInfo={{}}
        confirmRegistrationHandler={confirmRegistrationHandler}
      />
      )}

    </div>
  );
};

export default Register;
