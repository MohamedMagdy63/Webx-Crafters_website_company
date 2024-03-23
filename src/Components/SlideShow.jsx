import React, { useState, useEffect, useRef } from 'react';
import Test from '../Videos/SlideShow/SlideShow.mp4';

const captions = [
  'We offer customized solutions to every customer',
  'Imagination and creativity blended perfectly',
  'Our designs are simple and original'
];

const SlideShow = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % captions.length);
    }, 6000); // 6 seconds interval

    return () => clearInterval(intervalId);
  }, []);

  const handleVideoEnd = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  const handleCanPlayThrough = () => {
    videoRef.current.play();
  };

  return (
    <div className="relative flex justify-center h-screen">
      <div className="w-full h-full overflow-hidden">
        {/* Video with Fade Transition and Responsive Design */}
        <video
          ref={videoRef}
          className="object-cover w-full h-full transition-opacity duration-1000"
          src={Test}
          alt={`Video ${currentVideoIndex + 1}`}
          muted
          onEnded={handleVideoEnd}
          onCanPlayThrough={handleCanPlayThrough}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75">
          <h2 className="text-lg text-white font-semibold">
          {captions[currentVideoIndex]}
        </h2>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
