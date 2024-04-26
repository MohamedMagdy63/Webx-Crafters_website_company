import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Services = ({ language }) => {
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
                            <h2 className="text-2xl font-bold font-mono text-[#FFFAB7] text-center p-2">{language === 'En' ?'Limited':'الباقة المحدودة'}</h2>
                            <p className="text-white leading-relaxed"> {language === 'En' ?  'For Small Buisness or personal brand' :'الي الأعمال التجارية الصغيرة أو العلامة التجارية الشخصية'}</p>
                        </div>
                        <div className="relative rounded-b-lg"> 
                            <ul className={` pl-20 p-2 ${language === 'En' ?  'text-left list-disc':  'text-right pr-10'}  text-sm font-sans text-[#124076] capitalize`}>
                                <li className="p-1">{language === 'En' ? '1 Page' :'صفحة واحدة-'}</li>
                                <li className="p-1">{language === 'En' ? 'Custom Design':'تصميم خاص-'}</li>
                                <li className="p-1">{language === 'En' ? 'Manage And Update Viewing Data' :'أدارة وتحديث عرض البيانات-'}</li>
                                <li className="p-1">{language === 'En' ? 'Desing Logo' :'تصميم شعار-'} </li>
                                <li className="p-1 normal-case">{language === 'En' ? 'Special Domain Name With .com.co' :'اسم دوماين مميز خاص بك.com.co -'}</li>
                                <li className="p-1">{language === 'En' ? '5 design revisions' :'خمس مراجعات للتصميم-'}</li>
                                <li className="p-1"> {language === 'En' ? 'Special colors and sizes' :'أختيار الوان ومقاسات مناسبة-'}</li>
                                <li className="p-1"> {language === 'En' ? 'Responsive with all screens' :'متوافق مع جميع الشاشات-'}</li>
                                <li className="p-1"> {language === 'En' ? '1 GB RAM' :'مساحة 1 جيجا رام-'}</li>
                                <li className="p-1">{language === 'En' ? '50 GB SSD Storage' :'مساحة 50 جيجا تخزينية-'}</li>
                                <li className="p-1">{language === 'En' ? 'There are annual hosting and maintenance expenses' :'يوجد مصاريف سنويه من اجل الأستضافة والصيانه'}</li>
                            </ul>
                            <div>
                                <div className={`${language === 'En' ?  'text-left':  'text-right pr-10'}`}>
                                    <span className={`font-bold text-lg   ${language === 'En' ?  'text-left  pl-10':  'text-right pr-10'}`}>{language === 'En' ? '3400' :'٣٤٠٠'}  </span>
                                    <span className={`text-[#124076]  ${language === 'En' ?  'text-left  pl-2':  'text-right pr-2'}`}> {language === 'En' ? 'EGP' :'ج.م'}</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600">{language === 'En' ? 'Contact us for more information' :'تواصل معنا للمزيد من التفاصيل'}</p>
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
                    <div className={`relative overflow-hidden  scale-105 rounded-lg shadow-lg m-3 border border-[#FFFAB7] transform transition duration-300`}>
                        <div className="relative bg-[#5BBCFF]">
                            <h2 className="text-2xl font-bold  font-mono text-[#FFFAB7] text-center p-2">{language === 'En' ? 'Ultra' :'الباقة الشاملة'}</h2>
                            <p className="text-white leading-relaxed">{language === 'En' ? 'For big or intermediate companies' : 'مناسبه للشركات الكبيرة والمتوسطة'}</p>
                        </div>
                        <div className="relative rounded-b-lg"> 
                            <ul className={`pl-20 p-2 ${language === 'En' ? 'text-left list-disc': 'text-right pr-10'} text-sm font-sans text-[#124076] capitalize`}>
                                <li className="p-1">{language === 'En' ? 'e-commerce website':'متجر الكتروني-' }</li>
                                <li className="p-1">{language === 'En' ? 'Custom Design':'تصميم خاص-'}</li>
                                <li className="p-1">{language === 'En' ? 'Manage And Update Viewing Data' :'أدارة وتحديث عرض البيانات-'}</li>
                                <li className="p-1">{language === 'En' ? 'desktop application' : 'تطبيق لسطح المكتب -'}</li>
                                <li className="p-1">{language === 'En' ? 'Desing Logo' :'تصميم شعار-'} </li>
                                <li className="p-1 normal-case">{language === 'En' ? 'Special Domain Name With .com' :'اسم دوماين مميز حاص بك .com-'}</li>
                                <li className="p-1">{language === 'En' ? '3 redesign revisions for each page' :'ثلاث مراجعات إعادة تصميم لكل صفحة-'}</li>
                                <li className="p-1">{language === 'En' ? 'Special colors and sizes' :'أختيار الوان ومقاسات مناسبة-'}</li>
                                <li className="p-1">{language === 'En' ? 'apply promotions for your clients' :'تطبيق العروض الترويجية لعملائك-'}</li>
                                <li className="p-1 normal-case"> {language === 'En' ? 'SSL, HTTPS' : 'SSL, HTTPS-'}</li>
                                <li className="p-1 normal-case"> {language === 'En' ? 'IPV4 & IPV6 Support' : 'IPV4 & IPV6 يدعم-'}</li>
                                <li className="p-1">{language === 'En' ? '1 Gb/s Network' : '1 Gb/s سرعة الأستجابة-'}</li>
                                <li className="p-1">{language === 'En' ? '2 GB RAM' : 'اثنين جيجا بايت رام-'}</li>
                                <li className="p-1">{language === 'En' ? '100 GB SSD Storage' : '100 GB SSD تخزين'}</li>
                                <li className="p-1">{language === 'En' ? 'data-entry ' : 'أضافه جميع البيانات-'}</li>
                                <li className="p-1">{language === 'En' ? 'Distinctive, high-quality images' : 'صور مميزة وبجودة عالية-'}</li>
                                <li className="p-1">{language === 'En' ? 'Unlimited Bandwidth' : 'سعة غير محدودة-'}</li>
                                <li className="p-1">{language === 'En' ? 'Windows License Included' : 'Windows يتضمن ترخيص-'}</li>
                                <li className="p-1">{language === 'En' ? 'There are annual hosting and maintenance expenses' :'يوجد مصاريف سنويه من اجل الأستضافة والصيانه'}</li>
                            </ul>
                            <div>
                                <div className={`${language === 'En' ?  'text-left':  'text-right pr-10'}`}>
                                    <span className={`font-bold text-lg   ${language === 'En' ?  'text-left  pl-10':  'text-right pr-10'}`}>{language === 'En' ? '13100' :'١٣١٠٠'}  </span>
                                    <span className={`text-[#124076]  ${language === 'En' ?  'text-left  pl-2':  'text-right pr-2'}`}> {language === 'En' ? 'EGP' :'ج.م'}</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600">{language === 'En' ? 'Contact us for more information' :'تواصل معنا للمزيد من التفاصيل'}</p>
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
                            <h2 className="text-2xl font-bold  font-mono text-[#FFFAB7] text-center p-2">{language === 'En' ? 'Super Ultra' :'الباقة المتكاملة'}</h2>
                            <p className="text-white leading-relaxed">{language === 'En' ? 'For Large Companies and Huge Systems' :'مناسب للشركات و الأنظمة الضخمة'}</p>
                        </div>
                        <div className="relative rounded-b-lg"> 
                            <ul className={`pl-20 p-2 ${language === 'En' ? 'text-left list-disc':  'text-right pr-10'}  text-sm font-sans text-[#124076] capitalize`}>
                                <li className="p-1">{language === 'En' ? 'dashboard for admin' : 'نظام كامل لمتابعه وادارة موقعك -'}</li>
                                <li className="p-1">{language === 'En' ? 'full website or system' : 'نظام او موقع كامل من جميع الجوانب-'}</li>
                                <li className="p-1">{language === 'En' ? 'desktop application' : 'تطبيق لسطح المكتب -'}</li>
                                <li className="p-1">{language === 'En' ? 'Mobile application' : 'تطبيق للهاتف -'}</li>
                                <li className="p-1">{language === 'En' ? 'Custom Design':'تصميم خاص-'}</li>
                                <li className="p-1">{language === 'En' ? 'Manage And Update Viewing Data' :'أدارة وتحديث عرض البيانات-'}</li>
                                <li className="p-1">{language === 'En' ? 'Desing Logo' :'تصميم شعار-'} </li>
                                <li className="p-1 normal-case">{language === 'En' ? 'Special Domain Name With .com' :'اسم دوماين مميز حاص بك .com-'}</li>
                                <li className="p-1">{language === 'En' ? '3 redesign revisions for each page' :'ثلاث مراجعات إعادة تصميم لكل صفحة-'}</li>
                                <li className="p-1">{language === 'En' ? 'Special colors and sizes' :'أختيار الوان ومقاسات مناسبة-'}</li>
                                <li className="p-1">{language === 'En' ? 'apply promotions for your clients' :'تطبيق العروض الترويجية لعملائك-'}</li>
                                <li className="p-1 normal-case">{language === 'En' ? 'SSL, HTTPS' : 'SSL, HTTPS-'}</li>
                                <li className="p-1 normal-case">{language === 'En' ? 'IPV4 & IPV6 Support' : 'IPV4 & IPV6 يدعم-'}</li>
                                <li className="p-1">{language === 'En' ? '1 Gb/s Network' : '1 Gb/s سرعة الأستجابة-'}</li>
                                <li className="p-1">{language === 'En' ? '2 GB RAM' : 'اثنين جيجا بايت رام-'}</li>                                <li className="p-1">100 GB SSD Storage</li>
                                <li className="p-1">{language === 'En' ? 'data-entry ' : 'أضافه جميع البيانات-'}</li>
                                <li className="p-1">{language === 'En' ? 'Distinctive, high-quality images' : 'صور مميزة وبجودة عالية-'}</li>
                                <li className="p-1">{language === 'En' ? 'Unlimited Bandwidth' : 'سعة غير محدودة-'}</li>
                                <li className="p-1">{language === 'En' ? 'Windows License Included' : 'Windows يتضمن ترخيص-'}</li>
                                <li className="p-1">{language === 'En' ? 'There are annual hosting and maintenance expenses' :'يوجد مصاريف سنويه من اجل الأستضافة والصيانه'}</li>
                            </ul>
                            <div>
                                <div className={`${language === 'En' ?  'text-left':  'text-right pr-10'}`}>
                                    <span className={`font-bold text-lg   ${language === 'En' ?  'text-left  pl-10':  'text-right pr-10'}`}>{language === 'En' ? '15200' :'١٥٢٠٠'}  </span>
                                    <span className={`text-[#124076]  ${language === 'En' ?  'text-left  pl-2':  'text-right pr-2'}`}> {language === 'En' ? 'EGP' :'ج.م'}</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600">{language === 'En' ? 'Contact us for more information' :'تواصل معنا للمزيد من التفاصيل'}</p>
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

