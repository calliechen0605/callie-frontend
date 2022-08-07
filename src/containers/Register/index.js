/* eslint-disable jsx-a11y/click-events-have-key-events */
import { registerUser } from '@services/register';
import { Toast } from 'antd-mobile';
import { useEffect, useState } from 'react';
import { useAppContext } from '@utils/context';
import { useNavigate } from 'react-router-dom';
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

  const [, setStore] = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (step === STEP.ONE) {
      setStore({
        closeHeaderHandler: () => navigate('/login'),
      });
    }
    if (step === STEP.TWO) {
      setStore({
        closeHeaderHandler: () => setStep(STEP.ONE),
      });
    }
  }, [step]);

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

  return (
    <div>
      <Display visible={step === STEP.ONE}>
        <StepOne gotoNextStepHandler={gotoNextStepHandler} />
      </Display>

      <Display visible={step === STEP.TWO} isMounted>
        <StepTwo
          userInfo={userInfo}
          goToStepOneHandler={() => setStep(STEP.ONE)}
          confirmRegistrationHandler={confirmRegistrationHandler}
        />
      </Display>

    </div>
  );
};

export default Register;
