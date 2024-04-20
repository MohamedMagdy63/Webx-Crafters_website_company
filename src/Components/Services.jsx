import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Services = () => {
    const handleWhatsAppClick = () => {
      // Assuming the client's phone number
      const phoneNumber = '01117125043'; // Replace this with the actual phone number
      const message = 'Hello, I want to chat with you!'; // Your predefined message
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      // Redirect to WhatsApp link
      window.location.href = whatsappLink;
    };
  
    return (
        <>
            {/* Limited */}
            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className={`relative overflow-hidden scale-95 rounded-lg shadow-lg m-3 border border-[#FFFAB7] transform transition duration-300`}>
                        <div className="relative bg-[#5BBCFF]">
                            <h2 className="text-2xl font-bold  font-mono text-[#FFFAB7] text-center p-2">Limited</h2>
                            <p className="text-white leading-relaxed">Small Buisness or personal brand</p>
                        </div>
                        <div className="relative rounded-b-lg"> 
                            <ul className="text-left pl-20 p-2 list-disc text-sm font-sans text-[#124076] capitalize">
                                <li className="p-1">1 Page</li>
                                <li className="p-1">custom design</li>
                                <li className="p-1">Manage and update viewing data </li>
                                <li className="p-1">Desing Logo</li>
                                <li className="p-1 normal-case">Special Domain Name With .com.co</li>
                                <li className="p-1">5 design revisions</li>
                                <li className="p-1">colors and sizes</li>
                                <li className="p-1">promotions applied</li>
                                <li className="p-1">1 GB RAM</li>
                                <li className="p-1">50 GB SSD Storage</li>
                            </ul>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="font-bold text-lg pl-10">3400</span>
                                    <span className="text-[#124076]">EGP</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600">Contact us for more information</p>
                                <button onClick={handleWhatsAppClick}>
                                    <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-4xl p-3" /> 
                                </button>                                
                                <a href="mailto:webxcrafters@gmail.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 text-4xl p-3" /> 
                                </a>                            
                            </div>
                        </div>
                    </div>
                    {/* Ultra */}
                    <div className={`relative overflow-hidden scale-105 rounded-lg shadow-lg m-3 border border-[#FFFAB7] transform transition duration-300`}>
                        <div className="relative bg-[#5BBCFF]">
                            <h2 className="text-2xl font-bold  font-mono text-[#FFFAB7] text-center p-2">Ultra</h2>
                            <p className="text-white leading-relaxed">For big or intermediate companies</p>
                        </div>
                        <div className="relative rounded-b-lg"> 
                            <ul className="text-left pl-20 p-2 list-disc text-sm font-sans text-[#124076] capitalize">
                                <li className="p-1">e-commerce website</li>
                                <li className="p-1">custom design</li>
                                <li className="p-1">Manage and update viewing data</li>
                                <li className="p-1">Desing Logo</li>
                                <li className="p-1">desktop application</li>
                                <li className="p-1 normal-case">Special Domain Name With .com</li>
                                <li className="p-1">3 redesign revisions for each page</li>
                                <li className="p-1 ">colors and sizes</li>
                                <li className="p-1">promotions applied</li>
                                <li className="p-1 normal-case">SSL HTTPS , IPV4 & IPV6 Support</li>
                                <li className="p-1">2 GB RAM , 1 Gb/s Network</li>
                                <li className="p-1">100 GB SSD Storage</li>
                                <li className="p-1">data-entry</li>
                                <li className="p-1">stock images</li>
                                <li className="p-1">Unlimited Bandwidth</li>
                                <li className="p-1">Windows License Included</li>
                                <li className="p-1">desktop application</li>
                            </ul>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="font-bold text-lg pl-10">13100</span>
                                    <span className="text-[#124076]">EGP</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600">Contact us for more information</p>
                                <button onClick={handleWhatsAppClick}>
                                    <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-4xl p-3" /> 
                                </button>                                
                                <a href="mailto:webxcrafters@gmail.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 text-4xl p-3" /> 
                                </a>                            
                            </div>
                        </div>
                    </div>
                    {/*Super Ultra*/}
                    <div className={`relative overflow-hidden scale-95 rounded-lg shadow-lg m-3 border border-[#FFFAB7] transform transition duration-300`}>
                        <div className="relative bg-[#5BBCFF]">
                            <h2 className="text-2xl font-bold  font-mono text-[#FFFAB7] text-center p-2">Super Ultra</h2>
                            <p className="text-white leading-relaxed">For Large Companies and Huge Systems</p>
                        </div>
                        <div className="relative rounded-b-lg"> 
                            <ul className="text-left pl-20 p-2 list-disc text-sm font-sans text-[#124076] capitalize">
                                <li className="p-1">dashboard for admin</li>
                                <li className="p-1">full website or system</li>
                                <li className="p-1">custom design</li>
                                <li className="p-1">Manage and update viewing data</li>
                                <li className="p-1">Desing Logo</li>
                                <li className="p-1">desktop application</li>
                                <li className="p-1 normal-case">Special Domain Name With .com</li>
                                <li className="p-1">3 redesign revisions for each page</li>
                                <li className="p-1 ">colors and sizes</li>
                                <li className="p-1">promotions applied</li>
                                <li className="p-1 normal-case">SSL HTTPS , IPV4 & IPV6 Support</li>
                                <li className="p-1">2 GB RAM , 1 Gb/s Network</li>
                                <li className="p-1">100 GB SSD Storage</li>
                                <li className="p-1">data-entry</li>
                                <li className="p-1">stock images</li>
                                <li className="p-1">Unlimited Bandwidth</li>
                                <li className="p-1">Windows License Included</li>
                                <li className="p-1">desktop application</li>
                            </ul>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="font-bold text-lg pl-10">15200</span>
                                    <span className="text-[#124076] pl-1">EGP</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600">Contact us for more information</p>
                                <button onClick={handleWhatsAppClick}>
                                    <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-4xl p-3" /> 
                                </button>                                
                                <a href="mailto:webxcrafters@gmail.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 text-4xl p-3" /> 
                                </a>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Services;

