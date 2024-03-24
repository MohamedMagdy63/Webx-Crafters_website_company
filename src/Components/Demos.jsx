import React from 'react';
import DemoImages from '../Data/Demos';
const Demos = () => {
  return (
    <div className="container mx-auto my-10 p-0">
      <h1 className="lg:text-5xl text-3xl mt-4 mb-6 font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Explore Our Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 p-5 ">
        {DemoImages.map((item, index) => (
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
                <div className="absolute inset-0 flex items-center shadow-2xl justify-center bg-[#000] bg-opacity-25">
                  <div className="font-bold text-2xl text-white">
                  {item.desc}
                  <p className="font-semibold text-xl bg-click px-5 py-2 text-black rounded-lg ">
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
