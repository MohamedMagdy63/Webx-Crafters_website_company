
import AnalysisBox from '../Components/AnalysisBox';
import Demos from '../Components/Demos';
import OurClients from '../Components/OurClients';
import MainSlide from '../Components/MainSlide';
import Navbar from '../Components/Navbar';
import SlideShow from '../Components/SlideShow';
import { useEffect, useRef, useState } from 'react';
import Footer from '../Components/Footer';
import Services from '../Components/Services';
import EnglishLanguage from '../Data/EnglishLanguage';
import ArabicLanguage from '../Data/ArabicLanguage';
function Home({ language, handleLanguage }) {
  const captionContainerRef = useRef(null);
  const [showCaptionAnimation, setShowCaptionAnimation] = useState(false);
  useEffect(() => {
    window.scrollTo(0,0)
    const scrollHandler = () => {
      if (isElementInViewport(captionContainerRef.current)) {
        setShowCaptionAnimation(true);
      } else {
        setShowCaptionAnimation(false);
      }
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    
  };
 
  return (
    <div className="App">
      <Navbar language={language} handleLanguage={handleLanguage}/>
      <MainSlide language={language}/>
      <SlideShow language={language}/>
      <AnalysisBox language={language}/>
      <div ref={captionContainerRef}>
        {
          showCaptionAnimation ? 
            <h1 
              className={ `demoTitle ${language === 'En' ? 'english' : 'arabic'} text-center ${language === 'En' ? 'max-sm:text-left' :  'max-sm:text-right pr-4'} lg:text-4xl text-3xl pl-6 m-5 font-semibold text-[#116979]`}>
              {language === 'En' ? EnglishLanguage.map((item)=>item.demosTitle) :  ArabicLanguage.map((item)=>item.demosTitle)}
            </h1>
          : 
          ''
        }
      </div>
      <Demos language={language}/>
      <Services language={language}/>
      <OurClients language={language}/>
      <Footer language={language}/>
    </div>
  );
}

export default Home;
