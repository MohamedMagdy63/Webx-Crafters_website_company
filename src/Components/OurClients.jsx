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
      <h1 className={`text-center p-2 text-3xl font-mainFont`}>
        {language === 'En' ? EnglishLanguage.map((item)=>item.clientsTitle) :  ArabicLanguage.map((item)=>item.clientsTitle)}
      </h1>
      <div className="grid grid-cols-2 m-4 sm:m-8 md:m-16 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
        {Clients.map((client, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={client.img}
              alt={client.alt || `Client ${index + 1}`}
              className="w-full h-32 sm:h-48 md:h-56 lg:h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
