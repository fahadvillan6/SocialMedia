
import './App.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignupPage';

import { useSelector } from 'react-redux'



function App() {
  const form = useSelector(state => state.toggleReducer.form)
 
  return (
   
      <Router>
        <Routes>
          <Route path='/login' element={form === 'login' ? <LoginPage /> : <SignUpPage />}></Route>
        </Routes >
      </Router >

  );
}

export default App;
