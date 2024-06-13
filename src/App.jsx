import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Signup from './Pages/Signup';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
