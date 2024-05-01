import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Services from "../Components/Services";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ServicesPage = ({language , handleLanguage}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleWhatsAppClick = () => {
        // Assuming the client's phone number
        const phoneNumber = '01117125043'; // Replace this with the actual phone number
        const message = 'Hello, I want to chat with you!'; // Your predefined message
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        // Redirect to WhatsApp link
        window.location.href = whatsappLink;
    };
    return (
        <div className="app">
            <Navbar language={language} handleLanguage={handleLanguage}/>

            {/* Heading */}
            <div className="pt-24">
                <div className=" p-2 text-3xl font-mainFont"> {language === 'En' ? 'Get your package now':  'أطلب الباقة المناسبة لك الأن'}</div>
            </div>
            <Services/>
             {/* Ending */}
             <div className="m-10">
                <h1 className="text-2xl font-mainFont p-4">{language === 'En' ?  'Contact us now to get a package that suits your needs': 'تواصل معنا الأن للحصول علي باقة تناسب احتياجاتك'}</h1>
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
export default ServicesPage;

