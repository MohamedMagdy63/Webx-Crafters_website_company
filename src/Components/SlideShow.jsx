import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Test from '../Videos/SlideShow/Astronout.mp4';

const captions = [
  { text: 'We offer customized solutions to every customer' },
  { text: 'Imagination and creativity blended perfectly' },
  { text: 'Our designs are simple and original' }
];

const SlideShow = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);
  const controls = useAnimation();

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

  useEffect(() => {
    controls.start({
      scale: [0.95, 1.05, 1], // Keyframes for scale animation
      transition: { duration: 2, ease: 'easeInOut' }, // Animation duration and easing
    });
  }, [currentVideoIndex, controls]);

  return (
    <div className="relative p-5">
      <motion.div
        className="w-[90%] h-[700px] max-sm:w-[100%] max-sm:h-[450px] lg:ml-[5%] mt-5 overflow-hidden rounded-full relative"
        animate={controls}
      >
        <video
          ref={videoRef}
          className="object-cover w-full h-full transition-opacity duration-1000"
          src={Test}
          alt={`Video ${currentVideoIndex + 1}`}
          muted
          onEnded={handleVideoEnd}
          onCanPlayThrough={handleCanPlayThrough}
        />
        <motion.div
          className="absolute  top-0 left-0 right-0 bottom-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-xl font-semibold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            {captions[currentVideoIndex].text}
          </motion.h2>
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="video-animation"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default SlideShow;
