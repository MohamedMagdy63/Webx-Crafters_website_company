import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Gemy from '../Images/About/Gemy.jpg';
import Magdy from '../Images/About/Magdy.jpg';
import WebX from '../Images/About/WebX.png';
import { useEffect } from 'react';

function About() {
  useEffect(()=>{
    window.scrollTo(0,0)  
  })
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Animated Slide */}
        <div className="w-full h-[40vh] flex items-center justify-center relative bg-gradient-to-r from-blue-200 to-green-300">
          <div className="absolute left-0 md:left-16 top-1/3 lg:top-1/2 transform -translate-y-1/2">
            <img src={WebX} alt="WebX Logo" className="w-32 md:w-48 rounded-lg shadow-lg " />
          </div>
          <div className="text-center text-white">
            <h1 className="text-2xl md:text-5xl font-bold">We Are....</h1>
            <p className="text-base font-bold  md:text-xl mt-2">A start-up company developing, creating, and maintaining webpages.</p>
          </div>
          <div className="absolute right-0 md:right-16 top-1/3 lg:top-1/2 transform -translate-y-1/2">
            <img src={WebX} alt="WebX Logo" className="w-32 md:w-48 rounded-lg shadow-lg" />
          </div>
        </div>
        {/* Magdy's Section */}
        <div className="flex flex-col md:flex-row items-center justify-center my-12">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">
            <img src={Magdy} alt="Magdy" className="w-full h-full object-cover rounded-full shadow-lg" />
          </div>
          <div className="mt-4 md:mt-0 md:ml-8">
            <h2 className="text-lg md:text-2xl font-bold lg:text-left lg:ml-8">Mohamed Magdy</h2>
            <p className="text-sm md:text-lg text-gray-700 mt-2">Full-stack developer specializing in React and Nest.js. Magdy has a keen eye for design and user experience, with 3 years of experience in crafting visually appealing and intuitive interfaces.</p>
            <a href="https://mohamedmagdy.vercel.app/"  rel="noreferrer"  target='_blank'>
            <p className='text-blue-700  hover:text-blue-500'>Portfolio</p>
            </a>
          </div>
        </div>
        {/* Gemy's Section */}
        <div className="flex flex-col md:flex-row items-center justify-center my-12">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">
            <img src={Gemy} alt="Gemy" className="w-full h-full object-cover rounded-full shadow-lg" />
          </div>
          <div className="mt-4 md:mt-0 md:ml-8">
            <h2 className="text-lg md:text-2xl font-bold lg:text-left lg:ml-8">Ahmed Gemy</h2>
            <p className="text-sm md:text-lg text-gray-700 mt-2">Full-stack developer with expertise in React, Node.js, and MongoDB. Gemy has 5 years of experience in building robust web applications and managing complex server-side logic.</p>
            <a href="https://ahmedgamal.vercel.app/"  rel="noreferrer" target='_blank'>
            <p className='text-blue-700  hover:text-blue-500'>Portfolio</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
