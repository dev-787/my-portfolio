import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Project from './component/Project';
import Contact from './component/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
