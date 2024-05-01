import { motion } from "framer-motion";
import systems from "../Images/Icons/application-store-unscreen.gif";
import projects from "../Images/Icons/system-1--unscreen.gif";
import platform from "../Images/Icons/responsive-unscreen.gif";
import dynamic from "../Images/Icons/web-design-unscreen.gif";
import ArabicLanguage from "../Data/ArabicLanguage";
import EnglishLanguage from "../Data/EnglishLanguage";

const AnalysisBox = ({language}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring" } },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const objectVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  return (
    <div className="flex justify-center p-8 sm:p-20">
      <ul
        className="grid grid-cols-2 lg:grid-cols-4 max-sm:gap-2 gap-8 bg-gradient-to-b from-blue-300 via-blue-500 to-green-300 rounded-lg max-sm:p-4 p-8 shadow-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <li
          className="p-6 flex flex-col items-center justify-center bg-white rounded-md hover:bg-blue-200 transition"
          variants={itemVariants}
        >
          <motion.img
            src={platform}
            className="w-16 h-16 mb-2"
            alt=""
            style={{ perspective: "1000px" }}
            whileHover={{ rotateY: 20 }}
          />
          <span className="text-lg font-semibold text-blue-800">{language === 'En' ? EnglishLanguage.map((item)=>item.platforms) :  ArabicLanguage.map((item)=>item.platforms)}</span>
          <div
            className="w-4 h-4 bg-blue-800 rounded-full mt-2"
            variants={objectVariants}
            initial="hidden"
            animate="visible"
          />
        </li>
        <li
          className="p-6 flex flex-col items-center justify-center bg-white rounded-md hover:bg-blue-200 transition"
          variants={itemVariants}
        >
          <motion.img
            src={systems}
            className="w-16 h-16 mb-2"
            alt=""
            style={{ perspective: "1000px" }}
            whileHover={{ rotateY: 20 }}
          />
          <span className="text-lg font-semibold text-blue-800">{language === 'En' ? EnglishLanguage.map((item)=>item.commerce) :  ArabicLanguage.map((item)=>item.commerce)}</span>
          <div
            className="w-4 h-4 bg-blue-800 rounded-full mt-2"
            variants={objectVariants}
            initial="hidden"
            animate="visible"
          />
        </li>
        <li
          className="p-6 flex flex-col items-center justify-center bg-white rounded-md hover:bg-green-200 transition"
          variants={itemVariants}
        >
          <motion.img
            src={dynamic}
            className="w-16 h-16 mb-2"
            alt=""
            style={{ perspective: "1000px" }}
            whileHover={{ rotateY: 20 }}
          />
          <span className="text-lg font-semibold text-green-800">{language === 'En' ? EnglishLanguage.map((item)=>item.custom) :  ArabicLanguage.map((item)=>item.custom)}</span>
          <div
            className="w-4 h-4 bg-green-800 rounded-full mt-2"
            variants={objectVariants}
            initial="hidden"
            animate="visible"
          />
        </li>
        <li
          className="p-6 flex flex-col items-center justify-center bg-white rounded-md hover:bg-green-200 transition"
          variants={itemVariants}
        >
          <motion.img
            src={projects}
            className="w-16 h-16 mb-2"
            alt=""
            style={{ perspective: "1000px" }}
            whileHover={{ rotateY: 20 }}
          />
          <span className="text-lg font-semibold text-green-800">{language === 'En' ? EnglishLanguage.map((item)=>item.systemsAnalysis) :  ArabicLanguage.map((item)=>item.systemsAnalysis)}</span>
          <div
            className="w-4 h-4 bg-green-800 rounded-full mt-2"
            variants={objectVariants}
            initial="hidden"
            animate="visible"
          />
        </li>
      </ul>
    </div>
  );
};

export default AnalysisBox;
