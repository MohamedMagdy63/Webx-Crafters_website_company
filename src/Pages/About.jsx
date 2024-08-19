import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import WebX from '../Images/About/WebX.png';
import aboutSlide from '../Images/About/about.jpg';
import { useEffect } from 'react';
import aboutSlideImage from '../Images/About/aboutSlide.jpg'

function About({ language, handleLanguage }) {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <>
      <Navbar language={language} handleLanguage={handleLanguage}/>
      <div className="min-h-screen">
        {/* Animated Slide */}
        <div className="w-full h-[50vh] flex items-center justify-center relative bg-gradient-to-r from-blue-200 to-green-300">
          <div className="absolute left-0 md:left-16 top-1/2 transform -translate-y-1/2">
            <img src={WebX} alt="WebX Logo" className="w-32 md:w-48 rounded-lg shadow-lg " />
          </div>
          <div className="max-sm:mt-24 text-center text-white">
            <h1 className="text-2xl md:text-5xl font-bold">{language === 'En' ? 'We Are....':  '... نحن'}</h1>
            <p className="text-base font-bold  md:text-xl mt-2">{language === 'En' ? ' A startup company that works on developing, creating and designing websites and complete software systems.':  '. شركة ناشئة تعمل على تطوير وإنشاء وتصميم المواقع الألكترونيه والأنظمة البرمجية الكامله'}</p>
          </div>
          <div className="absolute right-0 md:right-16 top-1/2 transform -translate-y-1/2">
            <img src={WebX} alt="WebX Logo" className="w-32 md:w-48 rounded-lg shadow-lg" />
          </div>
        </div>
        {/* Goal */}
        <div className={`p-8 md:text-left text-center ${language === 'En' ? ' max-sm:ml-0':  ' max-sm:mr-0'}  m-32 font-sans font-semibold max-sm:ml-0`}>
          <h1 className={`${language === 'En' ? 'text-left':  'text-right'} lg:text-7xl text-4xl max-sm:text-3xl text-blue-500 `}>
            {language === 'En' ? 'Crafting':  'أنشئ'}
          </h1>
          <br />
          <h1 className={`lg:text-8xl text-5xl max-sm:text-4xl text-green-500 ${language === 'En' ? 'text-left':  'text-right'} `}>
            {language === 'En' ? 'your website.':  'موقعك الألكتروني'}
          </h1>
        </div>
        <div className="relative w-full">
          <img 
            src={aboutSlide}
            alt="Video animated"
            className="w-full rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        </div>
        {/* Our Goal */}
        {language === 'En' ?
          <div className="flex flex-col lg:flex-row justify-center lg:m-32 mt-32">
            
            <div className={` w-full lg:w-1/4 p-4 font-bold text-xl text-center  text-blue-800`}>
              <h1> Our Goal</h1>
            </div>
            <div className={` w-full lg:w-3/4 text-left p-4 text-lg text-gray-800`}>
              <p>
                At WebX-Crafters, our mission is to bring your unique digital vision to life. We're committed to crafting websites that not only reflect your brand's personality but also captivate and engage your target audience effectively. Our goal is to ensure that every website we create delivers an exceptional user experience, driving engagement and conversions for your business. With a focus on innovation, creativity, and client satisfaction, we're here to be your trusted partner in achieving your online objectives.
              </p>
            </div>
          </div>
        :  
          <div className="flex flex-col lg:flex-row justify-center lg:m-32 mt-32"> 
            <div className={` w-full lg:w-3/4 text-right p-4 text-lg text-gray-800`}>
              <p>
              تتمثل مهمتنا في أضفاء الحيوية علي رؤيتك الرقمية الفريدة . نحن ملتزمون بصياغة مواقع الويب التي تعكس شخصية علامتك التجارية فحسب , بل ايضا تستهدف جمهورك الخاص بفعاليى . هدفنا هو التأكد بفعالية . هدفنا هو التأكد من ان كل موقع ويب نقوم بأنشائه يقدم تجربة مستخدم استثنائية , مما يؤدي الي زيادة التفاعل والتحويلات لشركتك . مع التركيز علي الأبتكار وألأبداع ورضا العملاء , نحن هنا لنكون شريكك الموثوق به في تحقيق اهدافك عبر الأنترنت 
              </p>
            </div>
            <div className={` w-full lg:w-1/4 p-4 font-bold text-xl text-center  text-blue-800`}>
              <h1>هدفنا</h1>
            </div>
          </div>
        }
        {/* what we do */}
        <div className="flex flex-col justify-center lg:m-32 mt-32">
          <div className={`w-full p-4 font-bold text-5xl max-sm:text-3xl text-center ${language === 'En' ? 'lg:text-left':  'lg:text-right '}  text-blue-500`}>
            <h1 className="p-2">
                {language === 'En' ? 'Simply put, we do':  'ببساطة، نحن نفعل'}
            </h1>
            <h1 className=" p-2">
              {language === 'En' ? "what others don't":  'ما لا يفعله الآخرون'}
            </h1>
          </div>
          <div className={`${language === 'En' ? 'text-justify': 'text-right '} w-full lg:w-3/4 p-4 text-lg  text-gray-800`}>
          {language === 'En' ?
            <p>
              At our websites company, 
              we thrive on doing what others overlook. 
              We specialize in crafting unique solutions that stand out in a crowded digital landscape. 
              Our team is dedicated to pushing boundaries and innovating beyond the ordinary. 
              With a focus on creativity and forward-thinking strategies, 
              we redefine what's possible online. 
              Trust us to bring your vision to life in ways you never imagined.
            </p>
          :  
            <p>
              في شركة مواقعنا الإلكترونية
              نحن نزدهر في فعل ما يتجاهله الآخرون.
              نحن متخصصون في صياغة حلول فريدة تبرز في المشهد الرقمي المزدحم.
              فريقنا ملتزم بدفع الحدود والابتكار إلى ما هو أبعد من المعتاد.
              مع التركيز على الإبداع واستراتيجيات التفكير المستقبلي،
              نحن نعيد تعريف ما هو ممكن عبر الإنترنت.
              ثق بنا لتحقيق رؤيتك على أرض الواقع بطرق لم تتخيلها أبدًا
            </p>
          }
          </div>
        </div>
        {/* Image */}
        <div className="relative w-full mt-32">
          <img 
            src={aboutSlideImage}
            alt="aboutSlideImage"
            className="w-full rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        </div>
        {/* our mission */}
        {language === 'En' ?
          <div className="flex flex-col lg:flex-row justify-center lg:m-32 mt-32 mb-32 ">
            <div className="w-full lg:w-1/4 p-4 font-bold text-xl text-center lg:text-left text-blue-800">
              <h1>
                Our Mission
              </h1>
            </div>
            <div className={`w-full lg:w-3/4 p-4 text-lg text-justify text-gray-800`}>
              <p>
                At our company, 
                our mission is simple yet powerful: 
                to empower businesses and individuals to succeed in the digital realm. 
                We strive to break barriers and pave the way for innovation by providing cutting-edge solutions tailored to our clients' needs. 
                Our commitment to excellence drives us to constantly push the boundaries of possibility, 
                ensuring that our clients stay ahead of the curve. 
                With a relentless focus on customer satisfaction and technological advancement, 
                we're dedicated to fueling growth and fostering success in an ever-evolving online landscape.
              </p>
            </div>
          </div>
          :  
            <div className="flex flex-col lg:flex-row justify-center lg:m-32 mt-32"> 
              <div className={` w-full lg:w-3/4 text-right p-4 text-lg text-gray-800`}>
                <p>
                    في شركتنا
                    مهمتنا بسيطة لكنها قوية:
                    لتمكين الشركات والأفراد من النجاح في المجال الرقمي.
                    نحن نسعى جاهدين لكسر الحواجز وتمهيد الطريق للابتكار من خلال توفير حلول متطورة مصممة خصيصًا لتلبية احتياجات عملائنا.
                    إن التزامنا بالتميز يدفعنا إلى دفع حدود الإمكانيات باستمرار،
                    ضمان بقاء عملائنا في الطليعة.
                    مع التركيز المستمر على رضا العملاء والتقدم التكنولوجي،
                    نحن ملتزمون بتعزيز النمو وتعزيز النجاح في مشهد الإنترنت دائم التطور            </p>
              </div>
              <div className={` w-full lg:w-1/4 p-4 font-bold text-xl text-center  text-blue-800`}>
                <h1>هدفنا</h1>
              </div>
          </div>
          }
        
      </div>
      <Footer language={language}/>
    </>
  );
}

export default About;
