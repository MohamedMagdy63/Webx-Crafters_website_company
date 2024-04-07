import React from "react";
import { Link } from "react-router-dom";
import instagram from '../Images/Social-media/instagram.png';
import tiktok from '../Images/Social-media/tik-tok.png';
import email from '../Images/Social-media/email.png';


const Navbar = () => {
  return (
    <div className="relative bg-slate-50 w-full z-30">
      <div className="flex justify-evenly items-center p-2 relative">
        <Link to='/'>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            W
          </span>
          ebX-Crafters
        </Link>

        {/* Navigation Links */}
        <ul className='hidden lg:flex flex-row space-x-4 text-gray-500'>
          <Link to='/about' className="text-xl font-bold px-3 hover:text-gray-800">About</Link>
          <Link to='/services' className="text-xl font-bold px-3 hover:text-gray-800">Services</Link>
          <Link to='/projects' className="text-xl font-bold px-3 hover:text-gray-800">Projects</Link>
        </ul>

        {/* Social Media Icons */}
        <ul className='flex flex-row space-x-4'>
          <a href="https://www.instagram.com/webx_crafters" target="_blank" rel="noopener noreferrer" className="w-6 h-6 m-2">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com/@webx_crafters" target="_blank" rel="noopener noreferrer" className="w-6 h-6 m-2">
            <img src={tiktok} alt="tiktok" />
          </a>
          {/* Uncomment the following section if you want to include Gmail icon */}
          <a href="mailto:webxcrafters@gmail.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 m-2">
            <img src={email} alt="gmail" />
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
