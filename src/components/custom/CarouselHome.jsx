import React, { useEffect, useLayoutEffect, useState } from "react";
import slides from "@/data/homeImageBg";
import Marquee from "./Marquee";
import RotatingText from "./RotatingText";
import { SliderCaseStudy } from "./SliderCaseStudy";
const CarouselHome = ({ navbarHeight }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const heightNav = 80;
  return (
    <div
      className={`relative rounded-2xl w-full overflow-hidden`}
      style={{ height: `calc(100vh - ${navbarHeight}px)` }}
    >
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform transform ${
              index === currentSlide ? "translate-x-0" : "translate-x-full"
            } ${index < currentSlide ? "-translate-x-full" : ""}`}
            style={{ transitionDuration: "500ms" }}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover brightness-50"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      {/* <div className="absolute bottom-4 w-full flex justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`mx-2 w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div> */}
      <div className="absolute w-full h-full top-0">
        <div className="grid grid-cols-2 items-center h-full p-8">
          <div className="col-span-1 flex flex-col gap-8">
            <div className=" text-8xl font-black uppercase">
              <h1 className="text-theme">We</h1>
              <h1 className="text-white">Translate</h1>
              <h1 className="text-theme">Your ideas</h1>
            </div>
            <div className="bg-white py-3 container text-black flex overflow-x-hidden">
              <Marquee />
            </div>
            <div className="grid grid-cols-2 items-center text-white">
              <div>
                <p className="text-2xl">
                  We create{" "}
                  <span className="text-theme">
                    websites, develop brands & build eCommerce
                  </span>{" "}
                  experiences
                </p>
                <p className="py-3">for ambitious companies since 2011.</p>
                <div className="text-theme flex gap-2 items-center">
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
              <div>
                <RotatingText />
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-end gap-8">
            <div className="text-6xl flex flex-col text-white">
              <p className="text-theme text-7xl shadows-into-light-two-regular ">
                You dream it,
              </p>
              <p className="font-bold">We Create It.</p>
            </div>
            <button className="w-fit bg-theme flex gap-2 items-center py-4 px-6 rounded-full">
              <span>
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
              <p className="text-xl font-semibold">Book a call</p>
            </button>
            <div>
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
