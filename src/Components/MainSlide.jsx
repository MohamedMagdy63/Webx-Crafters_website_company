import React, { useState, useEffect } from 'react';
import Layout from '../Images/Icons/layers.png';
import Responsive from '../Images/Icons/responsive.png';
import TechnicalSupport from '../Images/Icons/technical-support.png';

const MainSlide = () => {
  const text = "Design, Develop and Create Webpages & Software Systems";
  const [animatedText, setAnimatedText] = useState('');
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    let index = 0;
    let steps = text.length * 2;
  
    const animateText = () => {
      if (index === steps) {
        setDirection(-1);
      } else if (index === 0) {
        setDirection(1);
      }
  
      setAnimatedText((prevText) => {
        index += direction;
        return text.slice(0, index);
      });
    };
  
    const interval = setInterval(animateText, (10 * 1000) / steps); // Decreased the total duration
  
    return () => clearInterval(interval);
  }, [direction, text]);

  return (
    <div className="relative bg-gradient-to-r w-full from-blue-500 to-green-500 bg-clip h-5/6 animate-background">
      <div className="bg-black w-full h-full absolute top-0 left-0 opacity-0"></div>
      
      {/* Greeting text */}
      <div className='relative w-full flex justify-center items-center'>
        <h1 className="text-white text-2xl lg:text-6xl w-full lg:w-2/3 h-80 font-bold pt-10 pt-40 text-center animate-fade-in">
          {animatedText}
        </h1>
      </div>
      {/* Services */}
      <div className="flex flex-col items-center text-white py-0 lg:py-20">
        <ul className="flex flex-col gap-8 lg:flex-row lg:items-center lg:w-2/3">
          <li className="flex items-center gap-4 px-6 py-3">
            <img src={Layout} className='w-14 h-14 p-1' alt="" />
            <p className="text-sm lg:text-base text-center">
              Unique Layout design
            </p>
          </li>
          
          <li className="flex items-center gap-4 px-6 py-3">
            <img src={Responsive} className='w-14 h-14 p-1' alt="" />
            <p className="text-sm lg:text-base text-center">
              Beautiful all Device Responsive
            </p>
          </li>
          
          <li className="flex items-center gap-4 px-6 py-3">
            <img src={TechnicalSupport} className='w-14 h-14 p-1' alt="" />
            <p className="text-sm lg:text-base text-center">
              24/7 Hours Dedicated Support
            </p>
          </li>
        </ul>
      </div>
      <div className="animate-bounce z-[-1] absolute top-20 lg:top-1/4 left-5 lg:left-1/4 w-16 h-16 bg-blue-500 rounded-full"></div>
      <div className="animate-bounce z-[-1] absolute top-60 lg:top-1/3 right-5 lg:right-1/4 w-16 h-16 bg-green-500 rounded-full"></div>

    </div>
  );
}

export default MainSlide;
