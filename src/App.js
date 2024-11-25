import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutMeSection from './components/AboutMeSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMeSection />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </Router>
  );
}

export default App;