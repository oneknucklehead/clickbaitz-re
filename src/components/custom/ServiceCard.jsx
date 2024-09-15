import React from "react";

import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ServiceCard = ({ imgUrl, index, title, description, link }) => {
  return (
    <div>
      <div className=" max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center p-6 md:p-8 bg-[#FDD034] rounded-lg shadow-md">
        {/* Left Section */}
        <div className="order-2 md:order-1 col-span-1 w-full flex justify-center md:justify-start items-center rounded-xl bg-[#FDD034]">
          <CardHeader>
            <CardDescription className="text-black text-3xl font-light">
              {index}
            </CardDescription>
            <CardTitle className="py-4 pl-4 text-black font-heading text-5xl">
              {title}
            </CardTitle>
            <CardDescription className="text-black text-xl">
              {description}
            </CardDescription>
            <p className="text-black text-sm py-4">Starts at $3,000/mo</p>
            <div className="my-2">
              <Link
                to={link}
                className="hover:opacity-90 w-fit bg-yellow-200 text-black font-semibold flex gap-2 items-center py-2 px-4 rounded-lg"
              >
                <p>Learn more</p>
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
            </div>
          </CardHeader>
        </div>

        {/* Right Section - Image */}
        <div className="order-1 md:order-2 col-span-1 mt-8 md:mt-0 h-fit w-full relative flex justify-center lg:justify-end">
          {/* First shadow layer */}
          <div className="absolute h-full w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] bg-yellow-100 rounded-lg translate-x-4 translate-y-4 shadow-lg"></div>

          {/* Second shadow layer */}
          <div className="absolute h-full w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] bg-yellow-200 rounded-lg translate-x-2 translate-y-2 shadow-lg"></div>

          {/* Actual Image */}
          <img
            src={imgUrl}
            alt="Creative Design"
            className="relative h-full w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
