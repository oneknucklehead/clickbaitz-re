import React, { useState } from "react";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceCard = ({ imgUrl, index, title, description, link }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 p-4 sm:p-6 md:p-8 bg-[#FDD034] rounded-lg shadow-md">
        {/* Text section */}
        <div className="order-2 md:order-1 flex justify-center md:justify-start items-center">
          <CardHeader className="p-0">
            <CardDescription className="text-black text-lg sm:text-xl font-light">
              {index}
            </CardDescription>
            <CardTitle className="py-2 text-black font-heading text-2xl sm:text-3xl md:text-4xl">
              {title}
            </CardTitle>
            <CardDescription className="text-black text-sm md:text-lg">
              {description}
            </CardDescription>
          </CardHeader>
        </div>

        {/* Image section */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          {/* Shadows */}
          <div className="hidden md:block absolute h-full w-full max-w-[280px] sm:max-w-[300px] md:max-w-[350px] bg-yellow-100 rounded-lg translate-x-4 translate-y-4 shadow-lg"></div>
          <div className="absolute h-full w-full max-w-[280px] sm:max-w-[300px] md:max-w-[350px] bg-yellow-200 rounded-lg translate-x-2 translate-y-2 shadow-md"></div>

          {/* Image */}
          <motion.img
            src={imgUrl}
            alt={title}
            onLoad={() => setImgLoaded(true)}
            className={`relative h-auto w-full max-w-[280px] sm:max-w-[300px] md:max-w-[350px] rounded-lg shadow-lg transition-opacity duration-500 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Skeleton */}
          {!imgLoaded && (
            <div className="absolute top-0 left-0 h-full w-full max-w-[300px] bg-gray-300 animate-pulse rounded-lg shadow-2xl z-10"></div>
          )}
        </div>
      </div>

      {/* <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center p-6 md:p-8 bg-[#FDD034] rounded-lg shadow-md">
    
        <div className="order-2 md:order-1 col-span-1 w-full flex justify-center md:justify-start items-center rounded-xl bg-[#FDD034]">
          <CardHeader>
            <CardDescription className="text-black text-lg sm:text-xl lg:text-3xl font-light">
              {index}
            </CardDescription>
            <CardTitle className="py-2 md:py-4 pl-2 md:pl-4 text-black font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {title}
            </CardTitle>
            <CardDescription className="text-black text-sm md:text-xl">
              {description}
            </CardDescription>

          </CardHeader>
        </div>

        <div className="order-1 md:order-2 col-span-1 mt-8 md:mt-0 h-fit w-full relative flex justify-center lg:justify-end">
      
          <div className="hidden md:block absolute h-full w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] bg-yellow-100 rounded-lg translate-x-4 translate-y-4 shadow-lg"></div>

          <div className="absolute h-full w-full max-w-[200px] md:max-w-[400px] lg:max-w-[450px] bg-yellow-200 rounded-lg sm:translate-x-2 translate-y-2 shadow-lg"></div>

          {!imgLoaded && (
            <div className="absolute top-0 left-0 h-full w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] bg-gray-300 animate-pulse rounded-lg shadow-2xl z-10"></div>
          )}

          <motion.img
            src={imgUrl}
            alt={title}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            className={`relative h-full w-full object-cover max-w-[300px] md:max-w-[400px] lg:max-w-[450px] rounded-lg shadow-2xl transition-opacity duration-500 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div> */}
    </div>
  );
};

export default ServiceCard;
