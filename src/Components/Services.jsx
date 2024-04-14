import React from "react";
import serviceData from "../Data/Services";

const Services = () => {
    return (
        <>
            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceData.map((service, index) => (
                        <div className={`relative overflow-hidden ${service.title ==='Ultra' ?'scale-105' : 'scale-95' } rounded-lg shadow-lg m-3 border border-[#FFFAB7] transform transition duration-300`}>
                        <div className="relative bg-[#5BBCFF]">
                            <h2 className="text-2xl font-bold  font-mono text-[#FFFAB7] text-center p-2">{service.title}</h2>
                            <p className="text-white leading-relaxed">{service.forWho}</p>
                        </div>
                        <div className="relative rounded-b-lg">
                            
                            <ul className="text-left pl-20 p-2 list-disc text-sm font-sans text-[#124076] capitalize">
                                <li className="p-1">{service.pagesNumber}</li>
                                <li className="p-1">{service.design}</li>
                                <li className="p-1">{service.redesign}</li>
                                <li className="p-1">{service.logo}</li>
                                <li className="p-1">{service.colors}</li>
                                <li className="p-1">{service.promotions}</li>
                                <li className="p-1">{service.domain}</li>
                                <li className="p-1">{service.manage}</li>
                                <li className="p-1">{service.ssl}</li>
                                <li className="p-1">{service.redesign}</li>
                                <li className="p-1">{service.ram}</li>
                            </ul>
                            <p className="p2 font-sans text-[#124076] capitalize">{service.details}</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="font-bold text-lg p-5">{service.price}</span>
                                    <span className="text-[#124076]">{service.frequency}</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600">Contact us for more information</p>
                                <p className="text-sm text-gray-600">Phone: 01117125043</p>
                                <p className="text-sm text-gray-600">Email: webxcrafters@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Services;

