import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fitnessModels from "/src/assets/landingpagemodels.png";

const LandingPageBox = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Build your dream body",
    "Track your fitness progress",
    "Get workout recommendations",
    "Manage your diet plan",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="h-3/4 w-3/4 flex overflow-x-hidden">
      <div className="flex flex-col">
        <div className="mt-36 font-bold text-white font-poppins text-8xl">
          Welcome to{" "}
          <span className="text-gradient bg-gradient-to-r from-blue-800 via-blue-500 to-cyan-500 text-transparent bg-clip-text">
            Elevate!
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
          className="mt-5 text-white font-semibold font-poppins text-4xl"
        >
          <h1>{texts[textIndex]}</h1>
        </motion.div>
        <div>
          <button className="mt-5 text-xl text-white font-poppins bg-gradient-to-r from-blue-500 to-blue-700 dark:from-purple-400 dark:to-purple-700 overflow-hidden hover:from-blue-600 hover:to-blue-800 py-3 px-6 rounded-full transform transition-all duration-500 ease-in-out hover:brightness-110 hover:animate-pulse">
            <Link to="/signup" className="font-poppins text-white text-xl">
              Get Started
            </Link>
          </button>
        </div>
      </div>
      <img
        src={fitnessModels}
        alt="fitess models"
        className="mt-2 w-3/4 ml-48"
      />
    </div>
  );
};

export default LandingPageBox;
