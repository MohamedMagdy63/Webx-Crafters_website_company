import { motion } from "framer-motion";
import systems from "../Images/Icons/web-traffic.png";
import projects from "../Images/Icons/project.png";
import platform from "../Images/Icons/platform.png";
import dynamic from "../Images/Icons/dynamic.png";

const AnalysisBox = () => {
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
      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-gradient-to-b from-blue-300 via-blue-500 to-green-300 rounded-lg p-8 shadow-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.li
          className="p-6 flex flex-col items-center justify-center bg-blue-200 rounded-md hover:bg-blue-300 transition"
          variants={itemVariants}
        >
          <motion.img
            src={platform}
            className="w-16 h-16 mb-2"
            alt=""
            style={{ perspective: "1000px" }}
            whileHover={{ rotateY: 20 }}
          />
          <span className="text-lg font-semibold text-blue-800">Platforms</span>
          <motion.div
            className="w-4 h-4 bg-blue-800 rounded-full mt-2"
            variants={objectVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.li>
        <motion.li
          className="p-6 flex flex-col items-center justify-center bg-blue-200 rounded-md hover:bg-blue-300 transition"
          variants={itemVariants}
        >
          <motion.img
            src={systems}
            className="w-16 h-16 mb-2"
            alt=""
            style={{ perspective: "1000px" }}
            whileHover={{ rotateY: 20 }}
          />
          <span className="text-lg font-semibold text-blue-800">Business Websites</span>
          <motion.div
            className="w-4 h-4 bg-blue-800 rounded-full mt-2"
            variants={objectVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.li>
        <motion.li
          className="p-6 flex flex-col items-center justify-center bg-green-200 rounded-md hover:bg-green-300 transition"
          variants={itemVariants}
        >
          <motion.img
            src={dynamic}
            className="w-16 h-16 mb-2"
            alt=""
            style={{ perspective: "1000px" }}
            whileHover={{ rotateY: 20 }}
          />
          <span className="text-lg font-semibold text-green-800">Dynamic Pages</span>
          <motion.div
            className="w-4 h-4 bg-green-800 rounded-full mt-2"
            variants={objectVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.li>
        <motion.li
          className="p-6 flex flex-col items-center justify-center bg-green-200 rounded-md hover:bg-green-300 transition"
          variants={itemVariants}
        >
          <motion.img
            src={projects}
            className="w-16 h-16 mb-2"
            alt=""
            style={{ perspective: "1000px" }}
            whileHover={{ rotateY: 20 }}
          />
          <span className="text-lg font-semibold text-green-800">Systems</span>
          <motion.div
            className="w-4 h-4 bg-green-800 rounded-full mt-2"
            variants={objectVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default AnalysisBox;
