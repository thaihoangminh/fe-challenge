import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Unlock from 'pages/unlock/unlock';
import Main from 'pages/main/main';
import SendAssets from 'pages/send-assets/send-assets';

import NoMatch from 'components/no-match/no-match';

import reportWebVitals from './reportWebVitals';

import { BASE_URL } from 'constants/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={BASE_URL.unlock} element={<Unlock />} />
        <Route path={BASE_URL.main} element={<Main />} />
        <Route path={BASE_URL.sendAssets} element={<SendAssets />} />
        <Route path={BASE_URL.home} element={<Navigate to={BASE_URL.unlock} />} />
        <Route path={BASE_URL.noMatch} element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
