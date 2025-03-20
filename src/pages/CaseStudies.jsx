import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import caseStudyData from "@/data/caseStudies";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/sections/Footer";
import { Link } from "react-router-dom";

export default function CaseStudies() {
  const [navbarHeight, setNavbarHeight] = useState(80);
  const navbarRef = useRef(null);
  useLayoutEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.clientHeight);
    }
  }, []);
  const [selected, setSelected] = useState("chamak");

  const handleSelection = (option) => {
    setSelected(option);
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  // Reset imageLoaded when selected changes
  useEffect(() => {
    setImageLoaded(false);
  }, [selected]);

  return (
    <div className="bg-[#0d0d0d]">
      <Navbar ref={navbarRef} />
      <div className="max-w-screen-2xl px-16 mx-auto py-12">
        <div>
          <h2 className="text-6xl font-bold text-theme uppercase">Case</h2>
          <h2 className="text-6xl font-bold text-theme mt-2 uppercase">
            Studies
          </h2>
          {/* <p className="text-white text-4xl mt-4">2023 - 2024.</p> */}
        </div>
        <div className="grid grid-cols-2 gap-24 p-10">
          <div className="w-full h-full">
            <ul className="mt-8 flex justify-center flex-col gap-8">
              <AnimatePresence>
                {Object.keys(caseStudyData).map((option) => (
                  <motion.h1
                    key={option}
                    className={`text-6xl capitalize transition-all duration-300 font-bold cursor-pointer ${
                      selected === option
                        ? "text-theme stroke-none"
                        : "text-transparent stroke-theme"
                    }`}
                    onClick={() => handleSelection(option)}
                    initial={{ opacity: 0, scale: 0.8, x: 0 }}
                    animate={{
                      x: selected === option ? 120 : 0,
                      opacity: selected === option ? 1 : 0.5,
                      scale: selected === option ? 1.2 : 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.3, // Increased duration for smoother transitions
                    }}
                  >
                    {caseStudyData[option].name}
                    {/* {console.log("hello: " + option)} */}
                  </motion.h1>
                ))}
              </AnimatePresence>
            </ul>
          </div>

          {/* Right Column */}
          <div className="w-full">
            <motion.div key={selected} className="flex flex-col items-start">
              <div className="relative w-72 h-48 ml-4">
                {/* Skeleton loader */}
                {!imageLoaded && (
                  <div className="absolute w-full h-full bg-gray-300 rounded-lg animate-pulse"></div>
                )}

                {/* Lazy load images */}
                <motion.img
                  src={caseStudyData[selected].images[1]}
                  alt="image1"
                  loading="lazy"
                  className={`absolute object-cover w-full h-full rounded-lg shadow-xl  transition-opacity duration-500 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded(true)} // Set to true when image is loaded
                  initial={{ x: 0 }}
                  animate={{ x: -20, y: -35, rotate: -4 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />
                <motion.img
                  src={caseStudyData[selected].images[0]}
                  alt="image2"
                  loading="lazy"
                  className={`absolute object-cover w-full h-full rounded-lg shadow-lg  transition-opacity duration-500 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded(true)} // Set to true when image is loaded
                  initial={{ x: 0 }}
                  animate={{ y: 8, rotate: 11 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />
              </div>

              {/* Text and Button with Animation */}
              <div className="mt-10">
                <motion.h3
                  className="text-4xl font-light text-theme"
                  key={caseStudyData[selected].index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  #{caseStudyData[selected].index}
                </motion.h3>

                <motion.div
                  className="flex text-sm space-x-4 mt-2"
                  key={caseStudyData[selected].tags.join()}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {caseStudyData[selected].tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      className="bg-theme font-semibold text-black py-1 px-3 rounded-full"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.p
                  className="mt-6 mb-2 text-theme max-w-md"
                  key={caseStudyData[selected].description}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  {caseStudyData[selected].description}
                </motion.p>

                <motion.div
                  className="flex items-center gap-2 mt-4 px-4 py-2 bg-theme w-fit font-semibold text-black rounded-lg cursor-pointer"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Link
                    to={caseStudyData[selected].link}
                    className="flex items-center gap-2"
                  >
                    <p>Read more</p>
                    <span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.182 1.18201C11.182 0.629723 10.7343 0.182008 10.182 0.182008L1.18201 0.182007C0.629723 0.182007 0.182008 0.629722 0.182008 1.18201C0.182008 1.73429 0.629723 2.18201 1.18201 2.18201L9.18201 2.18201L9.18201 10.182C9.18201 10.7343 9.62972 11.182 10.182 11.182C10.7343 11.182 11.182 10.7343 11.182 10.182L11.182 1.18201ZM1.70711 11.0711L10.8891 1.88911L9.4749 0.474901L0.292893 9.65691L1.70711 11.0711Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
