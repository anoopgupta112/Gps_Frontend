import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import GpsDetail from './detail/GpsDetail';
import GpsSummary from './summary/GpsSummary';
import Login from './auth/Login';
import SignUp from './auth/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/detail' element={<GpsDetail />} />
        <Route path='/summary' element={<GpsSummary />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
    </Router>

  </React.StrictMode>
);


