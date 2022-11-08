
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { useEffect, useState } from 'react'
import axios from 'axios';
import data from './data.json'
import data2 from './data2.json'
import { navigate } from "react"
import Login from './auth/Login';
import { Link, Route, Routes } from 'react-router-dom';
import SignUp from './auth/SignUp';
function App() {


  return (
    <div className='Holder'>
      <div className="App card" >
        <Login />
      </div>
    </div>
  );
}



export default App;
