import { useEffect, useState } from "react";
import slides from "@/data/homeImageBg";
import Marquee from "./Marquee";
import RotatingText from "./RotatingText";
import { SliderCaseStudy } from "./SliderCaseStudy";
import MarqueeItem from "./MarqueeItem";
import marqueeItems from "@/data/Marquee";
import { motion, AnimatePresence } from "framer-motion";

const CarouselHome = ({ navbarHeight }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const fadeVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

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
        <motion.img
          key={slides[currentIndex].id}
          src={slides[currentIndex].image}
          variants={fadeVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ opacity: { duration: 1 } }}
          className="absolute brightness-50 top-0 left-0 w-full h-full object-cover rounded-b-lg"
        />
      </AnimatePresence>
      {/* </div> */}

      <div className="absolute w-full h-full top-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full p-4 lg:p-8">
          <div className="col-span-1 flex flex-col gap-4 lg:gap-8">
            <div className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase">
              <h1 className="text-theme">We</h1>
              <h1 className="text-white">Translate</h1>
              <h1 className="text-theme">Your ideas</h1>
            </div>
            <div className="bg-white max-w-lg lg:max-w-full py-1 sm:py-2 lg:py-3 text-black flex overflow-x-hidden">
              <Marquee className={"container"}>
                <MarqueeItem texts={marqueeItems} from={0} to={"-100%"} />
              </Marquee>
            </div>
            <div className="grid grid-cols-2 items-center text-white">
              <div className="col-span-1">
                <p className="text-sm sm:text-lg lg:text-xl">
                  We create{" "}
                  <span className="text-theme">
                    websites, develop brands & build eCommerce
                  </span>{" "}
                  experiences
                </p>
                <p className="py-3 text-xs sm:text-base lg:text-lg">
                  for ambitious companies since 2011.
                </p>
                <div className="text-theme text-sm sm:text-lg lg:text-xl flex gap-2 items-center">
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
              <div className="col-span-1 flex justify-evenly items-center">
                <RotatingText />
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-wrap py-5 lg:flex-col justify-between items-center lg:items-end gap-4 lg:gap-8">
            <div className="text-4xl sm:text-5xl lg:text-7xl flex flex-col text-white">
              <p className="text-theme shadows-into-light-two-regular ">
                You dream it,
              </p>
              <p className="font-bold text-4xl md:text-6xl">We Create It.</p>
            </div>
            <div>
              <div className="flex justify-end my-3 md:my-6">
                <button className="w-fit bg-theme flex gap-2 items-center py-3 px-4 lg:py-4 lg:px-6 rounded-full">
                  <span className="hidden lg:block">
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
                  <span className="hidden md:block lg:hidden">
                    <svg
                      width="15"
                      height="15"
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
                  <span className="block md:hidden">
                    <svg
                      width="12"
                      height="12"
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
                  <p className="text-sm md:text-lg lg:text-xl font-semibold">
                    Book a call
                  </p>
                </button>
              </div>

              <div>
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
