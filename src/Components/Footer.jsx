import React from "react";
import { Link } from "react-router-dom";
import instagram from '../Images/Social-media/instagram.png';
import tiktok from '../Images/Social-media/tik-tok.png';
import email from '../Images/Social-media/email.png';
import ArabicLanguage from "../Data/ArabicLanguage";
import EnglishLanguage from "../Data/EnglishLanguage";

const Footer = ({language}) => {
  return (
    <footer className="bg-[#DFF5FF]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          
          {language === 'En' ? 
          <>
            <Link to='/' className=" text-black flex items-center">
              <span className="lg:-mt-2 -mt-1 lg:text-4xl sm:text-2xl max-sm:text-xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                W
              </span>
              <span className="lg:text-2xl sm:text-xl max-sm:text-lg font-mainFont">ebX-Crafters</span>
            </Link>
              <ul className='flex flex-row space-x-6 text-gray-500 mt-4 lg:mt-0 font-bold font-mainFont'>
                <li>
                  <Link to='/about' className="hover:text-gray-800 text-2xl max-sm:text-xl transition duration-300">  {language === 'En' ? EnglishLanguage.map((item)=>item.about) :  ArabicLanguage.map((item)=>item.about)} </Link>
                </li>
                <li>
                  <Link to='/services' className="hover:text-gray-800 text-2xl max-sm:text-xl transition duration-300">{language === 'En' ? EnglishLanguage.map((item)=>item.service) :  ArabicLanguage.map((item)=>item.service)} </Link>
                </li>
                <li>
                  <Link to='/projects' className="hover:text-gray-800 text-2xl max-sm:text-xl transition duration-300">{language === 'En' ? EnglishLanguage.map((item)=>item.projects) :  ArabicLanguage.map((item)=>item.about)} </Link>
                </li>
                {/* Add more links here if needed */}
              </ul>
              {/* Social Media Icons */}
              <ul className='flex space-x-6 mt-4 lg:mt-0'>
                <li>
                  <a href="https://www.instagram.com/webx_crafters" target="_blank" rel="noopener noreferrer">
                    <img className="w-8 h-8 lg:w-10 lg:h-10" src={instagram} alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@webx_crafters" target="_blank" rel="noopener noreferrer">
                    <img className="w-8 h-8 lg:w-10 lg:h-10" src={tiktok} alt="TikTok" />
                  </a>
                </li>
                <li>
                  <a href="mailto:webxcrafters@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img className="w-8 h-8 lg:w-10 lg:h-10" src={email} alt="Gmail" />
                  </a>
                </li>
              </ul>
          </>
          :  
          <>
            {/* Social Media Icons */}
            <ul className='flex space-x-6 mt-4 lg:mt-0'>
              <li>
                <a href="https://www.instagram.com/webx_crafters" target="_blank" rel="noopener noreferrer">
                  <img className="w-8 h-8 lg:w-10 lg:h-10" src={instagram} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@webx_crafters" target="_blank" rel="noopener noreferrer">
                  <img className="w-8 h-8 lg:w-10 lg:h-10" src={tiktok} alt="TikTok" />
                </a>
              </li>
              <li>
                <a href="mailto:webxcrafters@gmail.com" target="_blank" rel="noopener noreferrer">
                  <img className="w-8 h-8 lg:w-10 lg:h-10" src={email} alt="Gmail" />
                </a>
              </li>
            </ul>
            <ul className='flex flex-row space-x-6 text-gray-500 mt-4 lg:mt-0 font-bold font-mainFont'>
              <li>
                <Link to='/projects' className="hover:text-gray-800 text-2xl max-sm:text-xl transition duration-300">{ArabicLanguage.map((item)=>item.projects)} </Link>
              </li>
              <li>
                <Link to='/services' className="hover:text-gray-800 text-2xl max-sm:text-xl transition duration-300">{ArabicLanguage.map((item)=>item.service)} </Link>
              </li>
              <li>
                <Link to='/about' className="hover:text-gray-800 text-2xl max-sm:text-xl transition duration-300">  {ArabicLanguage.map((item)=>item.about)} </Link>
              </li>
              {/* Add more links here if needed */}
            </ul>
            <Link to='/' className=" text-black flex items-center">
              <span className="lg:-mt-2 -mt-1 lg:text-4xl sm:text-2xl max-sm:text-xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                W
              </span>
              <span className="lg:text-2xl sm:text-xl max-sm:text-lg font-mainFont">ebX-Crafters</span>
            </Link>
          </>
          } 
        </div>
        {/* Additional Information Section */}
        <div className="text-center mt-6 text-black">
          <p>&copy; {new Date().getFullYear()} {language === 'En' ? 'WebX-Crafters. All rights reserved.' : 'WebX-Crafters كل الحقوق محفوظة الي شركة '}</p>
          <p>{language === 'En' ? 'For inquiries, please email us at' : 'للمزيد من المعلومات راسلنا الأن'} <span className="text-[#898121] hover:text-green-400 transition duration-300">webxcrafters@gmail.com</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
