import React from 'react';
import Sa3y from "../Images/Clients/Sa3y.PNG";
import Relu from "../Images/Clients/Relu.png";


const Clients = [
  {
    img: Sa3y,
    desc: 'Scrub e-commerce business',
    details: "Owner: Dr-Hindawi who's famous blogger and this his account",
    account: 'https://www.instagram.com/hindawi1_/?hl=ar'
  },
  {
    img: Relu,
    desc: 'ReLU art is a Frames Gallery',
    details: "Owner: Khaled and Mahmoud",
    account: 'https://www.instagram.com/reluart.eg/?hl=ar'
  },
];

const OurClients = () => {
  return (
    <div className="h-full w-full my-10">
      <h1 className="lg:text-5xl text-3xl mt-4 mb-6 font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Our Clients</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Clients.map((item, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <img className="w-full h-auto mb-3" src={item.img} alt="" />
            <h2 className="text-lg font-semibold">{item.desc}</h2>
            <p className="text-sm text-gray-600">{item.details}</p>
            <a className="text-blue-500 hover:underline" href={item.account} target="_blank" rel="noopener noreferrer">Visit Account</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
