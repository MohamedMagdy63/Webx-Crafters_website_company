import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DemoImages from '../Data/Demos';
import Ending from "../Components/Ending";
import OurClients from "../Components/OurClients";

const Projects = ({ language, handleLanguage }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="app">
            <Navbar language={language} handleLanguage={handleLanguage}/>
            {/* Heading */}
            <div className="container">
                <div className="mt-24 p-2 text-3xl font-mainFont">{language === 'En' ? 'We Developed, Created and Designed more than 100 project.':  '.لقد قمنا بتطوير وإنشاء وتصميم أكثر من 100 مشروع'}</div>
                <p className="p-5 text-[#4793AF] font-mainFont">{language === 'En' ? 'Those are some of explore now.': '. لك الأن بعض من مشارعينا اطلع عليها الأن'}</p>
            </div>
            {/* Main content */}
            <div className="page">
                <div className="px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {DemoImages.map((item, index) => (
                    <div key={index} className="demo-item bg-white rounded-lg overflow-hidden shadow-md">
                        <a href={item.link} target='_blank' rel='noreferrer'>
                        <div className="image-container">
                            <img src={item.project} alt="slide_image" className="w-full h-auto" />
                        </div>
                        <div className="text-container p-4">
                            <p className={`text-lg font-mono text-center text-yellow-500 hover:scale-[1.2] hover:text-yellow-600`}>
                            {language === 'En' ? item.textEn : item.textAr}
                            </p>
                            <p className='text-center font-mono'>{language === 'En' ? item.descEn : item.descAr}</p>
                        </div>
                        </a>
                    </div>
                    ))}
                </div>
            </div>
            <OurClients language={language} />
            <Ending language={language} textAr={'تواصل معنا الأن لأنشاء تصميمك الخاص'}  textEn={'If you want to get yours contact us now'}/>
            <Footer language={language}/>
        </div>
    );
};
export default Projects;

