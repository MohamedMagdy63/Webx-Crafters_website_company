
import AnalysisBox from '../Components/AnalysisBox';
import Demos from '../Components/Demos';
import OurClients from '../Components/OurClients';
import MainSlide from '../Components/MainSlide';
import Navbar from '../Components/Navbar';
import SlideShow from '../Components/SlideShow';
import { useEffect } from 'react';
import Footer from '../Components/Footer';
import Services from '../Components/Services';
function Home() {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <div className="App">
      <Navbar/>
      <MainSlide/>
      <SlideShow/>
      <AnalysisBox/>
      <Demos/>
      <Services/>
      <OurClients/>
      <Footer/>
    </div>
  );
}

export default Home;
