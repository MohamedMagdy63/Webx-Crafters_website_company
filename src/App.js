import './App.css';
import Home from '../src/Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Projects from './Pages/Projects';
import ServicesPage from './Pages/ServicesPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />  
        <Route path="/services" element={<ServicesPage />} /> 
        <Route path="/projects" element={<Projects />} />  
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;