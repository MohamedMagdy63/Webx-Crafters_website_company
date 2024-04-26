import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
// import Test from '../Images/About/mainSlide.jpg';
import slide from '../Videos/SlideShow/Astronout.mp4'
const captionsEnglish = [
  { text: 'We offer customized solutions to every customer' },
  { text: 'Imagination and creativity blended perfectly' },
  { text: 'Our designs are simple and original' }
];
const captionsArabic = [
  { text: 'نقدم ابتكارات مناسبة الي كل عميل ' },
  { text: 'التخيل والأبداع يقدم في احسن صوره' },
  { text: 'تصميمنا بسيط و مميز' }
];

const SlideShow = ({language}) => {
  const [currentVideoIndex , setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);
  const controls = useAnimation();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % captionsEnglish.length);
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
    <div className="relative">
      <motion.div
        className="w-full p-0 h-[700px] max-sm:w-[100%] max-sm:h-[450px]  mt-5 overflow-hidden relative"
      >
        <video
          ref={videoRef}
          className="object-cover w-full h-full transition-opacity duration-1000"
          src={slide}
          alt={`Video animated`}
          muted
          onEnded={handleVideoEnd}
          onCanPlayThrough={handleCanPlayThrough}
        />
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
          
        >
          <motion.h2
            className="lg:text-4xl text-2xl  font-semibold text-white"
           
          >
            {language === 'En' ? captionsEnglish[currentVideoIndex].text : captionsArabic[currentVideoIndex].text }
          </motion.h2>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SlideShow;
