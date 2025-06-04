import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import slides from "@/data/homeImageBg";
import Marquee from "./Marquee";
import RotatingText from "./RotatingText";
import { SliderCaseStudy } from "./SliderCaseStudy";
import MarqueeItem from "./MarqueeItem";
import marqueeItems from "@/data/Marquee";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const CarouselHome = ({ navbarHeight }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef != null) {
      textRef.current.innerHTML = textRef.current.innerText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
        )
        .join("");
    }
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);
  // const handlePrev = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
  //   );
  // };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [handleNext]);
  useEffect(() => {
    const img = new Image();
    img.src = slides[(currentIndex + 1) % slides.length].image;
  }, [currentIndex]);

  const currentSlide = useMemo(() => slides[currentIndex], [currentIndex]);

  const fadeVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className={`relative w-full h-fit overflow-auto`}
      style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}
    >
      {/* <div className="absolute top-0 left-0 flex items-center w-full h-full justify-center"> */}
      <AnimatePresence
        initial={false}
        className="absolute top-0 left-0 flex items-center w-full h-full justify-center"
      >
        <motion.div
          key={currentSlide.id}
          variants={fadeVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          {!imageLoaded && (
            <div className="w-full h-full bg-gray-950 animate-pulse absolute top-0 left-0 z-10" />
          )}
          <motion.img
            src={currentSlide.image}
            alt={`slide-${currentSlide.id}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`absolute brightness-50 top-0 left-0 w-full h-full object-cover rounded-b-lg transition-opacity duration-700 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </motion.div>
      </AnimatePresence>
      {/* </div> */}

      <div className="absolute w-full h-full top-0">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center h-full p-4 lg:p-8">
          <div className="col-span-1  flex flex-col gap-8">
            <div className="hidden lg:block text-4xl sm:text-5xl lg:text-7xl font-black uppercase">
              <h1 className="text-theme">We</h1>
              <h1 className="text-white">Translate</h1>
              <h1 className="text-theme">Your ideas</h1>
            </div>
            <div className="flex lg:hidden text-5xl lg:text-7xl flex-col text-white">
              <p className="text-theme shadows-into-light-two-regular ">
                You dream it,
              </p>
              <p className="font-bold text-4xl md:text-6xl">We Create It.</p>
            </div>
            <div className="bg-white max-w-lg lg:max-w-full py-3 text-black flex overflow-x-hidden">
              <Marquee className={"container"}>
                <MarqueeItem texts={marqueeItems} from={0} to={"-100%"} />
              </Marquee>
            </div>
            <div className="grid grid-cols-2 items-center text-white">
              <div className="col-span-1">
                <p className="text-base sm:text-lg lg:text-xl">
                  We create{" "}
                  <span className="text-theme">
                    websites, develop brands & build eCommerce
                  </span>{" "}
                  experiences
                </p>
                {/* <p className="py-3 text-sm sm:text-base lg:text-lg">
                  for ambitious companies since 2011.
                </p> */}
                <div className="text-theme text-base sm:text-lg lg:text-xl flex gap-2 items-center">
                  <a href="https://www.facebook.com/clickbaiitz">Facebook</a>
                  <p>
                    <svg
                      width="35"
                      height="1"
                      viewBox="0 0 35 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line y1="0.5" x2="35" y2="0.5" stroke="#FDD034" />
                    </svg>
                  </p>
                  <a href="https://www.instagram.com/click.baitz_/">
                    Instagram
                  </a>
                </div>
              </div>
              {/* <div className="col-span-1 hidden lg:flex justify-evenly items-center">
                <RotatingText />
              </div> */}
              <div className="col-span-1 hidden lg:flex justify-evenly items-center">
                <Link
                  id="reputation-anchor"
                  to="reputation"
                  className="cursor-pointer"
                  smooth={true}
                  duration={100}
                >
                  <div className="flex w-full justify-center xl:ml-14">
                    <div
                      className="circle md:ml-20 h-fit w-full"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      // data-aos-delay="200"
                    >
                      <span className="hidden lg:block text-theme">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 43 43"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.12132 0.87868C3.94975 -0.292893 2.05025 -0.292893 0.87868 0.87868C-0.292893 2.05025 -0.292893 3.94975 0.87868 5.12132L5.12132 0.87868ZM40 43C41.6568 43 43 41.6568 43 40L43 13C43 11.3431 41.6569 10 40 10C38.3431 10 37 11.3431 37 13V37H13C11.3431 37 10 38.3431 10 40C10 41.6569 11.3431 43 13 43L40 43ZM0.87868 5.12132L37.8787 42.1213L42.1213 37.8787L5.12132 0.87868L0.87868 5.12132Z"
                            fill="#FDD034"
                          />
                        </svg>
                      </span>
                      <span className="hidden md:block lg:hidden text-theme">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 43 43"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.12132 0.87868C3.94975 -0.292893 2.05025 -0.292893 0.87868 0.87868C-0.292893 2.05025 -0.292893 3.94975 0.87868 5.12132L5.12132 0.87868ZM40 43C41.6568 43 43 41.6568 43 40L43 13C43 11.3431 41.6569 10 40 10C38.3431 10 37 11.3431 37 13V37H13C11.3431 37 10 38.3431 10 40C10 41.6569 11.3431 43 13 43L40 43ZM0.87868 5.12132L37.8787 42.1213L42.1213 37.8787L5.12132 0.87868L0.87868 5.12132Z"
                            fill="#FDD034"
                          />
                        </svg>
                      </span>
                      <span className="block md:hidden text-theme">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 43 43"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.12132 0.87868C3.94975 -0.292893 2.05025 -0.292893 0.87868 0.87868C-0.292893 2.05025 -0.292893 3.94975 0.87868 5.12132L5.12132 0.87868ZM40 43C41.6568 43 43 41.6568 43 40L43 13C43 11.3431 41.6569 10 40 10C38.3431 10 37 11.3431 37 13V37H13C11.3431 37 10 38.3431 10 40C10 41.6569 11.3431 43 13 43L40 43ZM0.87868 5.12132L37.8787 42.1213L42.1213 37.8787L5.12132 0.87868L0.87868 5.12132Z"
                            fill="#FDD034"
                          />
                        </svg>
                      </span>

                      <div className="text font-semibold">
                        <p className="text-white" ref={textRef}>
                          Your - Creative - Partner -{" "}
                          {/* Powering Ideas Into Impact */}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="block lg:hidden w-fit h-fit absolute bottom-10 right-10">
              <Link
                to="/call"
                className="flex  gap-2 bg-theme hover:bg-[#e2c036]  p-4 rounded-full items-center"
              >
                {" "}
                <span className="block">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.2372 28.9997C21.9734 28.9997 20.1981 28.5427 17.5396 27.0578C14.3069 25.2452 11.8064 23.5719 8.59118 20.3657C5.49117 17.2682 3.9826 15.2628 1.87126 11.4215C-0.513962 7.08442 -0.107361 4.811 0.347152 3.83936C0.888423 2.67805 1.68738 1.98346 2.72007 1.29406C3.30663 0.909826 3.92736 0.580453 4.57438 0.310117C4.63912 0.282282 4.69934 0.255742 4.75308 0.231791C5.07357 0.0874362 5.55915 -0.130714 6.17424 0.102325C6.58472 0.256389 6.95118 0.571638 7.52483 1.13805C8.70125 2.29807 10.3089 4.88156 10.9019 6.15032C11.3001 7.00544 11.5636 7.56991 11.5643 8.203C11.5643 8.94419 11.1914 9.51579 10.7388 10.1327C10.654 10.2486 10.5698 10.3593 10.4882 10.4667C9.99551 11.114 9.88738 11.3011 9.9586 11.6351C10.103 12.3064 11.1797 14.3047 12.9492 16.07C14.7187 17.8353 16.6597 18.8438 17.3337 18.9875C17.6821 19.0619 17.8731 18.9493 18.5413 18.4392C18.6371 18.3661 18.7355 18.2903 18.8384 18.2146C19.5286 17.7013 20.0738 17.3381 20.7976 17.3381H20.8015C21.4315 17.3381 21.9708 17.6113 22.8643 18.0618C24.0297 18.6496 26.6914 20.2362 27.8588 21.4137C28.4266 21.9859 28.7432 22.351 28.8979 22.7608C29.131 23.3777 28.9115 23.8612 28.7684 24.1849C28.7445 24.2386 28.7179 24.2975 28.6901 24.3629C28.4176 25.0087 28.0862 25.628 27.7001 26.213C27.0119 27.2422 26.3146 28.0391 25.1505 28.5809C24.5527 28.8637 23.8985 29.0069 23.2372 28.9997Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <span className="hidden lg:block text-sm md:text-lg lg:text-xl font-semibold">
                  Book a Call
                </span>
              </Link>
            </div>
          </div>
          <div className="col-span-1 hidden lg:flex flex-wrap py-5 lg:flex-col justify-end lg:justify-between items-center lg:items-end gap-4 lg:gap-8">
            <div className="hidden lg:flex text-4xl sm:text-5xl lg:text-7xl flex-col text-white">
              <p className="text-theme shadows-into-light-two-regular ">
                You dream it,
              </p>
              <p className="font-bold text-4xl md:text-6xl">We Create It.</p>
            </div>
            <div>
              <div className="flex justify-end my-3 md:my-6">
                {/* <iframe allow="payment" style={{ display: "none" }}></iframe> */}

                <Link
                  to="/call"
                  className="flex transition-all gap-2 bg-theme hover:bg-[#e2c036] p-4 rounded-full items-center"
                >
                  {" "}
                  <span className="block">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.2372 28.9997C21.9734 28.9997 20.1981 28.5427 17.5396 27.0578C14.3069 25.2452 11.8064 23.5719 8.59118 20.3657C5.49117 17.2682 3.9826 15.2628 1.87126 11.4215C-0.513962 7.08442 -0.107361 4.811 0.347152 3.83936C0.888423 2.67805 1.68738 1.98346 2.72007 1.29406C3.30663 0.909826 3.92736 0.580453 4.57438 0.310117C4.63912 0.282282 4.69934 0.255742 4.75308 0.231791C5.07357 0.0874362 5.55915 -0.130714 6.17424 0.102325C6.58472 0.256389 6.95118 0.571638 7.52483 1.13805C8.70125 2.29807 10.3089 4.88156 10.9019 6.15032C11.3001 7.00544 11.5636 7.56991 11.5643 8.203C11.5643 8.94419 11.1914 9.51579 10.7388 10.1327C10.654 10.2486 10.5698 10.3593 10.4882 10.4667C9.99551 11.114 9.88738 11.3011 9.9586 11.6351C10.103 12.3064 11.1797 14.3047 12.9492 16.07C14.7187 17.8353 16.6597 18.8438 17.3337 18.9875C17.6821 19.0619 17.8731 18.9493 18.5413 18.4392C18.6371 18.3661 18.7355 18.2903 18.8384 18.2146C19.5286 17.7013 20.0738 17.3381 20.7976 17.3381H20.8015C21.4315 17.3381 21.9708 17.6113 22.8643 18.0618C24.0297 18.6496 26.6914 20.2362 27.8588 21.4137C28.4266 21.9859 28.7432 22.351 28.8979 22.7608C29.131 23.3777 28.9115 23.8612 28.7684 24.1849C28.7445 24.2386 28.7179 24.2975 28.6901 24.3629C28.4176 25.0087 28.0862 25.628 27.7001 26.213C27.0119 27.2422 26.3146 28.0391 25.1505 28.5809C24.5527 28.8637 23.8985 29.0069 23.2372 28.9997Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  <span className="hidden lg:block text-sm md:text-lg lg:text-xl font-semibold">
                    Book a Call
                  </span>
                </Link>
              </div>

              <div className="hidden lg:block">
                <SliderCaseStudy />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselHome;
