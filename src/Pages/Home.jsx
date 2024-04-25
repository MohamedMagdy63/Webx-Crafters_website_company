
import AnalysisBox from '../Components/AnalysisBox';
import Demos from '../Components/Demos';
import OurClients from '../Components/OurClients';
import MainSlide from '../Components/MainSlide';
import Navbar from '../Components/Navbar';
import SlideShow from '../Components/SlideShow';
import { useEffect } from 'react';
import Footer from '../Components/Footer';
import Services from '../Components/Services';
import EnglishLanguage from '../Data/EnglishLanguage';
import ArabicLanguage from '../Data/ArabicLanguage';
function Home({ language, handleLanguage }) {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <div className="App">
      <Navbar language={language} handleLanguage={handleLanguage}/>
      <MainSlide language={language}/>
      <SlideShow language={language}/>
      <AnalysisBox language={language}/>
      <h1 className={`text-center ${language === 'En' ? 'max-sm:text-left' :  'max-sm:text-right pr-4'} lg:text-4xl text-3xl pl-6 mt-10 font-semibold text-[#607274]`}>
        {language === 'En' ? EnglishLanguage.map((item)=>item.demosTitle) :  ArabicLanguage.map((item)=>item.demosTitle)}
      </h1>
      <Demos language={language}/>
      <Services language={language}/>
      <OurClients language={language}/>
      <Footer language={language}/>
    </div>
  );
}

export default Home;
