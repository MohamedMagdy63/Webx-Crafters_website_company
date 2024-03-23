import React from 'react';
import relu from '../Images/Demos/relu-client.vercel.app_.png';
import H_Scrub from "../Images/Demos/scrub-shopping.png";
import Gosto from "../Images/Demos/Gosto.png";
import Auction from "../Images/Demos/Auction.png";
import Loukma from "../Images/Demos/Loukma.png";
import Coffe from "../Images/Demos/Coffe.png";
import Portfolio from "../Images/Demos/Portfolio.png";
import cartemplate from "../Images/Demos/car-template.png";
import niketemplete from "../Images/Demos/nike-templete.png";





const demoImages = [
  {
    // Scrub
    project:H_Scrub,
    link:'https://scrub-shopping.vercel.app/',
    desc:'E-commerce Website',
    text:'Click on me',
  },
  {
    project:relu,
    link:'https://relu-client.vercel.app/',
    desc:'Cashier system',
    text:'Click on me'
  },
  {
    project:Gosto,
    desc:'E-commerce Website',
    text:'Link not available'
  },
  {
    project:Auction,
    desc:'E-commerce Website',
    text:'Link not available'
  },
  {
    project:Coffe,
    desc:'Management system',
    text:'Link not available'
  },
  {
    project:Loukma,
    desc:'Cashier system',
    text:'Link not available',
  },
  {
    project:Portfolio,
    link:'https://magdy.vercel.app/',
    desc:'Portfolio',
    text:'Click on me',
  },
  {
    project:cartemplate,
    link:'https://car-template-rho.vercel.app/',
    desc:'E-commerce Website',
    text:'Click on me',
  },
  {
    project:niketemplete,
    link:'https://nike-templete.vercel.app/',
    desc:'E-commerce Website',
    text:'Click on me',
  },
  
 ];

const Demos = () => {
  

  return (
    <div className="container mx-auto my-10 p-0">
      <h1 className="lg:text-5xl text-3xl mt-4 mb-6 font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Explore Our Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 p-5 ">
        {demoImages.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-2xl h-full">
            <div className="relative aspect-w-1 aspect-h-1 h-full">
              <a
                href={item.link}
                target='_blank'
                rel='noreferrer'
                className="w-full h-full "
                
              >
                <img
                  className="object-cover w-full h-[500px] shadow-2xl"
                  src={item.project}
                  alt=""
                />
                <div className="absolute inset-0 flex items-center shadow-2xl justify-center bg-[#496989] bg-opacity-25">
                  <div className="font-bold text-2xl text-white">
                  {item.desc}
                  <p className="font-semibold text-xl text-white bg-click px-5 py-2 text-[#000] rounded-lg">
                    {item.text}
                  </p>
                  </div>
                  
                </div>
              </a>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demos;
