import React, { useRef } from 'react';
import car from '../Images/Demos/car_templete.gif';
import Nike from '../Images/Demos/Nike.gif';


const demoImages = [car, Nike];

const Demos = () => {
  const videoRefs = useRef([]);

  const handlePlayButtonClick = (index) => {
    const video = videoRefs.current[index];
    video.playbackRate = 2; // Set playback speed to 2x
    video.play(); // Play the video when the button is clicked
  };

  return (
    <div className="container mx-auto my-10 p-0">
      <h1 className="lg:text-5xl text-3xl mt-4 mb-6 font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Explore Our Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {demoImages.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md h-full">
            <div className="aspect-w-1 aspect-h-1 h-full">
              <button
                onClick={() => handlePlayButtonClick(index)}
                className="relative w-full h-full focus:outline-none"
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="object-cover w-full h-full transition-opacity duration-1000"
                  src={item}
                  onEnded={() => handlePlayButtonClick(index)}
                  alt=""
                  muted
                  playsInline
                  preload="auto"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-50 p-4 rounded-full cursor-pointer text-white">
                    Play
                  </div>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demos;
