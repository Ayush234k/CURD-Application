import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login } from './components/Authentication/Login';
import { Signup } from './components/Authentication/Signup';
import { Dashboard } from './components/Dashboard';
import "./App.css";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
