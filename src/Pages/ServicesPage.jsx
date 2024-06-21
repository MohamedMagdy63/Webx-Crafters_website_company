import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Services from "../Components/Services";

import ServicesData from "../Data/Services";
import Ending from "../Components/Ending";

const ServicesPage = ({language , handleLanguage}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="app">
            <Navbar language={language} handleLanguage={handleLanguage}/>
           
            <div class="max-w-8xl mx-auto px-10 py-28">
                <h1 class="text-4xl font-bold text-center mb-10">
                    {language === 'En' ? 'Our Services' : '.ما نقدمه'}
                </h1>
                <p class="text-lg text-gray-700 text-center mb-12">
                    {language === 'En' ? 'Welcome to our services page. We offer a range of services to help you achieve your web development goals.' : 'مرحبًا بك في صفحة خدماتنا. نقدم مجموعة من الخدمات لمساعدتك في تحقيق أهداف تطوير الويب الخاصة بك.'}
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        ServicesData.map((item, index) =>(
                        <div class="bg-[#f8f8f8]  rounded-lg shadow-md p-8 border border-[#FFFAB7] transition duration-300 ease-in-out transform hover:scale-105">
                            <h2 class="text-2xl text-[#020201] font-semibold mb-4">{language === 'En' ? item.titleEN : item.titleAr}</h2>
                            <p class="text-black">
                                {language === 'En' ? item.descEn : item.descAr}
                            </p>
                        </div>
                        ))
                    }
                </div>
            </div>

            <div>
                <div className=" p-2 text-3xl font-mainFont"> {language === 'En' ? 'Get your package now':  'أطلب الباقة المناسبة لك الأن'}</div>
            </div>
            <Services language={language}/>
            <Ending language={language} textAr={  'تواصل معنا الأن للحصول علي باقة تناسب احتياجاتك'} textEn={  'Contact us now to get a package that suits your needs'}/>
            <Footer language={language}/>
        </div>
    );
};
export default ServicesPage;

