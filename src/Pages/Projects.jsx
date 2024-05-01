import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Demos from "../Components/Demos";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Projects = ({ language, handleLanguage }) => {
    const handleWhatsAppClick = () => {
        // Assuming the client's phone number
        const phoneNumber = '01117125043'; // Replace this with the actual phone number
        const message = 'Hello, I want to chat with you!'; // Your predefined message
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        // Redirect to WhatsApp link
        window.location.href = whatsappLink;
      };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="app">
            <Navbar language={language} handleLanguage={handleLanguage}/>
            {/* Heading */}
            <div className="container">
                <div className="mt-10 p-2 text-3xl font-mainFont">{language === 'En' ? 'We Developed, Created and Designed more than 100 project.':  '.لقد قمنا بتطوير وإنشاء وتصميم أكثر من 100 مشروع'}</div>
                <p className="p-5 text-[#4793AF] font-mainFont">{language === 'En' ? 'Those are some of them take a tour now.': '. لك الأن بعض من مشارعينا اطلع عليها الأن'}</p>
            </div>
            <Demos />
            {/* Ending */}
            <div className="m-10">
                <h1 className="text-2xl font-mainFont p-4">{language === 'En' ? 'If you want to get yours contact us now': 'تواصل معنا الأن لأنشاء تصميمك الخاص'}</h1>
                <button onClick={handleWhatsAppClick}>
                    <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-4xl p-4" /> 
                </button>                                
                <a href="mailto:webxcrafters@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 text-4xl p-4" /> 
                </a>  
            </div>
            <Footer language={language}/>
        </div>
    );
};
export default Projects;

