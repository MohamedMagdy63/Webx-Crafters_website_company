import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Ending = ({ language, textAr , textEn }) => {
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
        <div className="m-10">
            <h1 className="text-2xl font-mainFont p-4">{language === 'En' ?  textEn: textAr}</h1>
            <button onClick={handleWhatsAppClick}>
                <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-4xl p-4" /> 
            </button>                                
            <a href="mailto:webxcrafters@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 text-4xl p-4" /> 
            </a>  
        </div>
    );
};
export default Ending;

