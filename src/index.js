import React from 'react';
import ReactDOM from 'react-dom';
import Login from '@containers/Login';
import './index.css';
// import Register from './containers/Register';
// import { startVconsole } from './utils';

ReactDOM.render(
  <React.StrictMode>
    {/* <Register /> */}
    <Login />
  </React.StrictMode>,
  document.getElementById('root'),
);

// 启动 vconsole
// startVconsole();
