import {
  Button, Form, Dialog,
} from 'antd-mobile';
import { Link } from 'react-router-dom';
import TInput from '@components/TInput';
import { useAppContext } from '@utils/context';
import { useEffect } from 'react';
import { login } from '../../services/login';

import style from './index.module.scss';

const Login = () => {
  const [form] = Form.useForm();
  const [, setStore] = useAppContext();

  useEffect(() => {
    setStore({
      closeHeaderHandler: null,
    });
  }, []);

  const onSubmit = async () => {
    const values = await form.validateFields();
    if (values) {
      const res = await login(values.username, values.password);
      if (res.success && res.data.length > 0) {
        Dialog.alert({
          content: '登录成功',
        });
        return;
      }
      Dialog.alert({
        content: '登录失败',
      });
    }
  };

  return (
    <div className={style.login}>
      <div className={style.formTitle}>Twitter Login</div>
      <Form
        form={form}
        className={style.formContainer}
      >
        <Form.Item
          name="username"
          rules={[
            { required: true, message: "Username can't be empty" },
          ]}
        >
          <TInput label="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Password can't be empty" },
          ]}
        >
          <TInput label="Password" type="password" />
        </Form.Item>
        <Button className={style.footerButton} onClick={onSubmit}>Next</Button>
      </Form>
      <div className={style.gotoRegistration}>
        No account yet?
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
