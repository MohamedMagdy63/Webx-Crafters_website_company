import systems from "../Images/Icons/web-traffic.png";
import projects from "../Images/Icons/project.png";
import platform from "../Images/Icons/platform.png";
import dynamic from "../Images/Icons/dynamic.png";

const AnalysisBox = () => {

  return (
    // container
    <div className="flex justify-center p-8 sm:p-20">      
      <ul className='flex  flex-col lg:flex-row border text-xl sm:text-2xl bg-gradient-to-b from-blue-300 via-blue-500 to-green-300 rounded-lg p-8 shadow-lg'>
        <li className="p-6 sm:p-10 flex items-center justify-left bg-blue-200 rounded-md hover:bg-blue-300 transition">
          <img src={platform} className="w-16 h-16 mx-4" alt="" />
          <span className="text-base sm:text-lg font-bold text-blue-800 p-5">Platforms</span>
        </li>
        <li className="p-6 sm:p-10 flex items-center justify-left bg-blue-200 rounded-md hover:bg-blue-300 transition">
          <img src={systems} className="w-16 h-16 mx-4" alt="" />
          <span className="text-base sm:text-lg font-bold text-blue-800 p-5">Business Websites</span>
        </li>
        <li className="p-6 sm:p-10 flex items-center justify-left bg-green-200 rounded-md hover:bg-green-300 transition">
          <img src={dynamic} className="w-16 h-16 mx-4" alt="" />
          <span className="text-base sm:text-lg font-bold text-green-800 p-5">Dynamic Pages</span>
        </li>
        <li className="p-6 sm:p-10 flex items-center justify-left bg-green-200 rounded-md hover:bg-green-300 transition">
          <img src={projects} className="w-16 h-16 mx-4" alt="" />
          <span className="text-base sm:text-lg font-bold text-green-800 p-5">Systems</span>
        </li>
      </ul>
    </div>
  );
};

export default AnalysisBox;
