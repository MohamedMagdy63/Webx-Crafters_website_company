
import AnalysisBox from '../Components/AnalysisBox';
import Demos from '../Components/Demos';
import OurClients from '../Components/OurClients';
import MainSlide from '../Components/MainSlide';
import Navbar from '../Components/Navbar';
import SlideShow from '../Components/SlideShow';
import { useEffect } from 'react';
import Footer from '../Components/Footer';
import serviceData from '../Data/Services';
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
       <h1 className="text-3xl font-bold mt-6 text-center bg-gradient-to-r z-50 
      from-blue-500 to-green-500 bg-clip-text text-transparent">Explore Our Project</h1>
      <Demos/>
      <Services/>
      <OurClients/>
      <Footer/>
    </div>
  );
}

export default Home;
