import caseStudyData from "@/data/caseStudies";
import { useLayoutEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Marquee from "@/components/custom/Marquee";
import MarqueeImageItem from "@/components/custom/MarqueeImageItem";

import img1 from "../assets/case-studies/chamakstudy1.jpg";
import img2 from "../assets/case-studies/chamakstudy2.jpg";
import img3 from "../assets/case-studies/chamakstudy3.jpg";
import img4 from "../assets/case-studies/chamakstudy4.jpg";
import img5 from "../assets/case-studies/chamakstudy5.jpg";
import img6 from "../assets/case-studies/chamakstudy6.jpg";
import Nav from "@/components/custom/NavbarNew";
import Accordion from "@/components/custom/Accordion";

const CaseStudy = () => {
  const [navbarHeight, setNavbarHeight] = useState(80);

  const navbarRef = useRef(null);
  useLayoutEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.clientHeight);
    }
  }, []);
  const { caseStudy } = useParams();

  // Check if the caseStudy exists in the data
  const study = caseStudyData[caseStudy];
  console.log("URL: ");
  console.log(study);

  const [selected, setSelected] = useState("Problem");

  const handleSelection = (option) => {
    setSelected(option);
  };
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedStatement = study.studies[selectedIndex];
  const handleSelectionStatement = (index) => {
    setSelectedIndex(index);
  };
  // If the caseStudy does not exist, redirect to error page
  if (!study) {
    return <Navigate to="/error" />;
  }
  return (
    <div className="bg-[#0d0d0d]">
      <Nav />
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-16 py-24">
        <div className="grid lg:grid-cols-2 gap-8 m-10">
          <motion.h1 className=" col-span-1 flex items-center justify-center text-center lg:text-right lg:justify-end text-6xl font-semibold text-theme">
            {caseStudyData[caseStudy].name}
          </motion.h1>
          <motion.p className=" text-white text-center lg:text-start text-sm md:text-lg lg:max-w-xl">
            {caseStudyData[caseStudy].description}
          </motion.p>
        </div>

        <div>
          <Marquee className={"container"}>
            <MarqueeImageItem
              images={caseStudyData[caseStudy].marqueeImgs}
              from={0}
              to={"-100%"}
            />
            {/* <MarqueeImageItem images={lowerMarquee} from={"-100%"} to={0} /> */}
          </Marquee>
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-8 p-10">
          <div className="w-full h-full">
            <ul className="mt-8 flex justify-center flex-col gap-8">
              <AnimatePresence>
                {study?.studies?.map((item, index) => (
                  <motion.h1
                    key={item}
                    className={`text-5xl lg:text-6xl flex gap-2 items-center capitalize transition-all duration-300 font-bold cursor-pointer ${
                      selectedIndex === index
                        ? "text-theme stroke-none"
                        : "text-transparent stroke-theme"
                    }`}
                    onClick={() => handleSelectionStatement(index)}
                    initial={{ opacity: 0, scale: 0.8, x: 0 }}
                    animate={{
                      x: selectedIndex === index ? 90 : 0,
                      opacity: selectedIndex === index ? 1 : 0.5,
                      scale: selectedIndex === index ? 1.2 : 1,
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
                    <p>{item.title}</p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: selectedIndex === index ? 1 : 0,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.8, // Increased duration for smoother transitions
                      }}
                    >
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 628 612"
                        fill="none"
                        className={`rotate-[-35deg]`}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M266.874 40.9767L297.975 9.87642C311.143 -3.29219 332.437 -3.29218 345.466 9.87642L617.804 282.074C630.972 295.243 630.972 316.537 617.804 329.565L345.466 601.903C332.297 615.072 311.003 615.072 297.975 601.903L266.874 570.803C253.566 557.494 253.846 535.78 267.435 522.752L436.245 361.926L33.622 361.926C14.9898 361.926 2.46916e-05 346.937 2.63204e-05 328.304L3.02395e-05 283.475C3.18684e-05 264.843 14.9898 249.853 33.622 249.853L436.245 249.853L267.435 89.0281C253.706 75.9996 253.426 54.2854 266.874 40.9767Z"
                          fill="#FDD034"
                        />
                      </svg>
                    </motion.div>
                  </motion.h1>
                ))}
              </AnimatePresence>
            </ul>
          </div>

          <div className="w-full h-full">
            <motion.div
              key={selectedStatement.title}
              className="flex-1 p-8 bg-theme rounded-lg shadow-md mb-4 h-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                // height: "auto",
                y: 0,
                transition: { duration: 0.5 },
              }}
              exit={{
                opacity: 0,

                transition: { duration: 0.5 },
              }}
            >
              <div>
                <h3 className="text-4xl mb-4 capitalize">
                  {selectedStatement.title}
                </h3>
              </div>
              <div className="text-black text-lg">
                {selectedStatement.content}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="block lg:hidden">
          <Accordion items={study.studies} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
