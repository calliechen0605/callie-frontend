import React from 'react';
import ReactDOM from 'react-dom';
import Login from '@containers/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '@containers/App';
import Register from '@containers/Register';
import { CxtProvider } from '@utils/context';

import './index.css';

//
// import { startVconsole } from './utils';

ReactDOM.render(
  <React.StrictMode>
    <CxtProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CxtProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// 启动 vconsole
// startVconsole();
