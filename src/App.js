import './App.css';
import React, { useState } from 'react';
import Home from '../src/Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Projects from './Pages/Projects';
import ServicesPage from './Pages/ServicesPage';

function App() {
  const [language, setLanguage] = useState('En');

  const handleLanguage = () => {
    setLanguage(language === 'En' ? 'Ar' : 'En');
  };
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home language={language} handleLanguage={handleLanguage} />} /> 
        <Route path="/about" element={<About language={language} handleLanguage={handleLanguage}/>} />  
        <Route path="/services" element={<ServicesPage />} /> 
        <Route path="/projects" element={<Projects />} />  
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;