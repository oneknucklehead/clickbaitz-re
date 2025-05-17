import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  lazy,
  Suspense,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import caseStudyData from "@/data/caseStudies";
import Nav from "@/components/custom/NavbarNew";
import Container from "@/components/custom/Container";

// ✅ Lazy load components
const Navbar = lazy(() => import("@/components/custom/Navbar"));
const Footer = lazy(() => import("@/components/sections/Footer"));

// import caseStudyData from wherever it is defined

function AccordionModal({ selected, setSelected, caseStudyData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveOption(null);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    setImageLoaded(false);
  }, [selected]);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <div className="block lg:hidden mt-8">
      {Object.keys(caseStudyData).map((option) => {
        const isActive = activeOption === option;
        return (
          <div key={option} className="mb-2">
            <button
              onClick={() => {
                if (isActive) {
                  setActiveOption(null); // Reset if it's already active
                } else {
                  setSelected(option);
                  setActiveOption(option); // Set active when clicking
                  setIsOpen(true);
                }
              }}
              className="w-full text-left text-2xl transition font-bold text-theme py-2 border-b-2 border-white/10 flex justify-between items-center"
            >
              <motion.span
                className="transition-all" // Adding smooth transition for translateX
                animate={{ translateX: isActive ? "1rem" : "0" }} // Animating translateX
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {caseStudyData[option].name}
              </motion.span>
              <motion.span
                animate={{ rotate: isActive ? 90 : 0 }} // Rotate arrow when active
                transition={{ duration: 0.2 }}
                className="bg-white/5 p-3 rounded-full"
              >
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0001 1.53784C12.0001 0.985556 11.5524 0.537841 11.0001 0.537841L2.00012 0.537842C1.44784 0.537841 1.00012 0.985556 1.00012 1.53784C1.00012 2.09013 1.44784 2.53784 2.00012 2.53784L10.0001 2.53784L10.0001 10.5378C10.0001 11.0901 10.4478 11.5378 11.0001 11.5378C11.5524 11.5378 12.0001 11.0901 12.0001 10.5378L12.0001 1.53784ZM1.70723 12.2449L11.7072 2.24495L10.293 0.830735L0.293015 10.8307L1.70723 12.2449Z"
                    fill="#FDD034"
                  />
                </svg>
              </motion.span>
            </button>
          </div>
        );
      })}

      {/* Modal with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              ref={modalRef}
              className="bg-[#1a1a1a] max-w-md w-full p-4 rounded-xl relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="w-full flex justify-end pb-4">
                <motion.button
                  onClick={() => {
                    setIsOpen(false);
                    setActiveOption(null); // Reset active option when closing
                  }}
                  className="bg-white/10 rounded-full w-fit p-3 text-white text-xl font-bold"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.6 40L0 34.4L14.4 20L0 5.70001L5.6 0.100006L20 14.5L34.3 0.100006L39.9 5.70001L25.5 20L39.9 34.4L34.3 40L20 25.6L5.6 40Z"
                      fill="#FDD034"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Images */}
              <div className="relative w-full h-48">
                {!imageLoaded && (
                  <div className="absolute w-full h-full bg-gray-300 rounded-lg animate-pulse z-0" />
                )}
                <motion.img
                  src={caseStudyData[selected].images[1]}
                  alt="image1"
                  loading="lazy"
                  className={`absolute object-cover w-full h-full rounded-lg shadow-xl transition-opacity duration-500 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageLoaded ? 1 : 0 }}
                />
                <motion.img
                  src={caseStudyData[selected].images[0]}
                  alt="image2"
                  loading="lazy"
                  className={`absolute object-cover w-full h-full rounded-lg shadow-lg transition-opacity duration-500 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageLoaded ? 1 : 0 }}
                />
              </div>

              <motion.h3
                className="text-3xl mt-6 font-light text-theme"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                #{caseStudyData[selected].index}
              </motion.h3>

              <motion.div
                className="flex flex-wrap gap-2 mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {caseStudyData[selected].tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-theme capitalize font-semibold text-black text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.p
                className="mt-4 text-theme text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {caseStudyData[selected].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to={caseStudyData[selected].link}
                  className="inline-block mt-6 px-4 py-2 bg-theme text-black font-semibold rounded-lg"
                >
                  Read more
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default function CaseStudies() {
  const [navbarHeight, setNavbarHeight] = useState(80);
  const navbarRef = useRef(null);

  useLayoutEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.clientHeight);
    }
  }, []);

  const [selected, setSelected] = useState("chamak");
  const [imageLoaded, setImageLoaded] = useState(false);

  // Reset imageLoaded when selected changes
  useEffect(() => {
    setImageLoaded(false);
  }, [selected]);

  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      {/* ✅ Suspense for lazy-loaded Navbar */}
      <Suspense
        fallback={
          <div className="h-20 bg-black text-white text-center">
            Loading Navbar...
          </div>
        }
      >
        <Nav />
      </Suspense>

      <div className="mx-auto pt-32 pb-28">
        <Container>
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-theme uppercase">
              Case
            </h2>
            <h2 className="text-5xl lg:text-6xl font-bold text-theme mt-2 uppercase">
              Studies
            </h2>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-24 py-16">
            {/* Left Column: Options */}
            <div className="w-full h-full">
              <ul className="mt-8 flex justify-center flex-col gap-8">
                <AnimatePresence>
                  {Object.keys(caseStudyData).map((option) => (
                    <motion.h1
                      key={option}
                      className={`text-5xl xl:text-6xl capitalize transition-all duration-300 font-bold cursor-pointer ${
                        selected === option
                          ? "text-theme stroke-none"
                          : "text-transparent stroke-theme"
                      }`}
                      onClick={() => setSelected(option)}
                      initial={{ opacity: 0, scale: 0.8, x: 0 }}
                      animate={{
                        x: selected === option ? 90 : 0,
                        opacity: selected === option ? 1 : 0.5,
                        scale: selected === option ? 1.2 : 1,
                      }}
                      exit={{ opacity: 0, scale: 0.8, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {caseStudyData[option].name}
                    </motion.h1>
                  ))}
                </AnimatePresence>
              </ul>
            </div>

            {/* Right Column: Details */}
            <div className="w-full">
              <motion.div key={selected} className="flex flex-col items-start">
                <div className="relative w-72 h-48 ml-4">
                  {/* ✅ Skeleton loader */}
                  {!imageLoaded && (
                    <div className="absolute w-full h-full bg-gray-300 rounded-lg animate-pulse z-0"></div>
                  )}

                  {/* ✅ Lazy loaded first image */}
                  <motion.img
                    src={caseStudyData[selected].images[1]}
                    alt="image1"
                    loading="lazy"
                    className={`absolute object-cover w-full h-full rounded-lg shadow-xl transition-opacity duration-500 ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    initial={{ x: 0 }}
                    animate={{ x: -20, y: -35, rotate: -4 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  />

                  {/* ✅ Lazy loaded second image */}
                  <motion.img
                    src={caseStudyData[selected].images[0]}
                    alt="image2"
                    loading="lazy"
                    className={`absolute object-cover w-full h-full rounded-lg shadow-lg transition-opacity duration-500 ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setImageLoaded(true)}
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
          <AccordionModal
            selected={selected}
            setSelected={setSelected}
            caseStudyData={caseStudyData}
          />
        </Container>
      </div>

      {/* ✅ Suspense for lazy-loaded Footer */}
      <Suspense
        fallback={
          <div className="text-white text-center py-8">Loading Footer...</div>
        }
      >
        <Footer />
      </Suspense>
    </div>
  );
}
