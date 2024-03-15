import './App.css';
import Home from '../src/Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Services from './Pages/Services';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />  
        <Route path="/services" element={<Services />} /> 
        <Route path="/projects" element={<Projects />} />  
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;