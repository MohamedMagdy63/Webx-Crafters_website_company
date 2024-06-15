import React from 'react';
import Sa3y from "../Images/Clients/Sa3y.PNG";
import Relu from "../Images/Clients/Relu.png";
import GP from "../Images/Clients/GP.jpg";

import EnglishLanguage from '../Data/EnglishLanguage';
import ArabicLanguage from '../Data/ArabicLanguage';
const Clients = [
  { img: Sa3y },
  { img: Relu },
  { img: GP },


];
const OurClients = ({language}) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className={`text-center ${language === 'En' ? 'max-sm:text-left' :  'max-sm:text-right'} text-3xl lg:text-4xl p-4 mb-8 font-semibold text-[#607274]`}>
        {language === 'En' ? EnglishLanguage.map((item)=>item.clientsTitle) :  ArabicLanguage.map((item)=>item.clientsTitle)}
      </h1>
      <div className="grid grid-cols-2 m-16 md:grid-cols-4 lg:grid-cols-8 gap-6">
        {Clients.map((client, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <img src={client.img} alt={`Client ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
