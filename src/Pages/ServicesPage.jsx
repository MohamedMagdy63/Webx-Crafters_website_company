import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Services from "../Components/Services";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ServicesPage = () => {
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
            <Navbar/>
            {/* Heading */}
            <div className="pt-24">
                <div className=" p-2 text-3xl font-mainFont">Get your package now</div>
            </div>
            <Services/>
             {/* Ending */}
             <div className="m-10">
                <h1 className="text-2xl font-mainFont p-4">Also we can customize packages to meet your needs.</h1>
                <button onClick={handleWhatsAppClick}>
                    <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-4xl p-4" /> 
                </button>                                
                <a href="mailto:webxcrafters@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 text-4xl p-4" /> 
                </a>  
            </div>
            <Footer/>
        </div>
    );
};
export default ServicesPage;

