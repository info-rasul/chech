import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
// @ts-ignore
import React from 'react';

function App() {
  return (
    <div className='app font-bebas'>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  </div>
  )
}

export default App
