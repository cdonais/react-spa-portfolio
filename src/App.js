import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
      {/* <Footer></Footer> */}
    </Router>
  );
}

export default App;
