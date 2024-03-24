import React from "react";
import { Link } from "react-router-dom";
import instagram from '../Images/Social-media/instagram.png';
import tiktok from '../Images/Social-media/tik-tok.png';
import email from '../Images/Social-media/email.png';

const Footer = () => {
  return (
    <footer className="bg-gray-700 py-5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <Link to='/' className="text-white">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              W
            </span>
            ebX-Crafters
          </Link>
          <ul className='flex flex-col lg:flex-row lg:space-x-4 text-white mt-4 lg:mt-0 font-bold'>
            <li>
              <Link to='/about' className="text-xl hover:text-green-200">About</Link>
            </li>
            <li>
              <Link to='/services' className="text-xl hover:text-green-200">Services</Link>
            </li>
            <li>
              <Link to='/projects' className="text-xl hover:text-green-200">Projects</Link>
            </li>
            {/* Add more links here if needed */}
          </ul>

          {/* Social Media Icons */}
          <ul className='flex space-x-4 mt-4 lg:mt-0'>
            <li>
              <a href="https://www.instagram.com/webx_crafters" target="_blank" rel="noopener noreferrer">
                <img className="w-10 h-10" src={instagram} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@webx_crafters" target="_blank" rel="noopener noreferrer">
                <img className="w-10 h-10" src={tiktok} alt="TikTok" />
              </a>
            </li>
            <li>
              <a href="mailto:webxcrafters@gmail.com" target="_blank" rel="noopener noreferrer">
                <img className="w-10 h-10" src={email} alt="Gmail" />
              </a>
            </li>
          </ul>
        </div>
        {/* Additional Information Section */}
        <div className="text-center mt-4 text-white">
          <p>&copy; {new Date().getFullYear()} WebX-Crafters. All rights reserved.</p>
          <p>For inquiries, please email us at <a href="mailto:webxcrafters@gmail.com" className="text-green-300">webxcrafters@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
