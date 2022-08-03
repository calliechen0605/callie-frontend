import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './containers/Login';
import { startVconsole } from './utils';

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root'),
);

// 启动 vconsole
startVconsole();
