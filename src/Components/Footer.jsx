import React from "react";
import { Link } from "react-router-dom";
import instagram from '../Images/Social-media/instagram.png';
import tiktok from '../Images/Social-media/tik-tok.png';
import email from '../Images/Social-media/email.png';
import ArabicLanguage from "../Data/ArabicLanguage";
import EnglishLanguage from "../Data/EnglishLanguage";

const Footer = ({ language }) => {
  return (
    <footer className="bg-gradient-to-br from-[#d4e9ff] to-[#87ceeb] py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          
          {/* Logo Section */}
          <Link to='/' className="flex items-center text-black">
            <span className="lg:-mt-2 -mt-1 lg:text-5xl sm:text-3xl text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent">
              W
            </span>
            <span className="lg:text-3xl sm:text-2xl text-xl font-mainFont ">ebX-Crafters</span>
          </Link>

          {/* Navigation Links */}
          <ul className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 text-gray-700 font-semibold font-mainFont text-center'>
            <li>
              <Link to='/about' className="hover:text-gray-900 text-2xl transition duration-300 ease-in-out">{language === 'En' ? EnglishLanguage.map(item => item.about) : ArabicLanguage.map(item => item.about)}</Link>
            </li>
            <li>
              <Link to='/services' className="hover:text-gray-900 text-2xl transition duration-300 ease-in-out">{language === 'En' ? EnglishLanguage.map(item => item.service) : ArabicLanguage.map(item => item.service)}</Link>
            </li>
            <li>
              <Link to='/projects' className="hover:text-gray-900 text-2xl transition duration-300 ease-in-out">{language === 'En' ? EnglishLanguage.map(item => item.projects) : ArabicLanguage.map(item => item.projects)}</Link>
            </li>
          </ul>

          {/* Social Media Icons */}
          <ul className='flex space-x-6'>
            <li>
              <a href="https://www.instagram.com/webx_crafters" target="_blank" rel="noopener noreferrer">
                <img className="w-8 h-8 lg:w-12 lg:h-12 hover:scale-110 transition-transform duration-300 ease-in-out" src={instagram} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@webx_crafters" target="_blank" rel="noopener noreferrer">
                <img className="w-8 h-8 lg:w-12 lg:h-12 hover:scale-110 transition-transform duration-300 ease-in-out" src={tiktok} alt="TikTok" />
              </a>
            </li>
            <li>
              <a href="mailto:webxcrafters@gmail.com" target="_blank" rel="noopener noreferrer">
                <img className="w-8 h-8 lg:w-12 lg:h-12 hover:scale-110 transition-transform duration-300 ease-in-out" src={email} alt="Email" />
              </a>
            </li>
          </ul>
        </div>

        {/* Additional Information Section */}
        <div className="text-center mt-8 text-black">
          <p className="text-xl font-semibold">&copy; {new Date().getFullYear()} {language === 'En' ? 'WebX-Crafters. All rights reserved.' : 'WebX-Crafters كل الحقوق محفوظة الي شركة '}</p>
          <p className="text-lg mt-2">{language === 'En' ? 'For inquiries, please email us at' : 'للمزيد من المعلومات راسلنا الأن'} 
            <a href="mailto:webxcrafters@gmail.com" className="text-[#004d4d] hover:text-green-500 transition duration-300 ease-in-out ml-1">webxcrafters@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
