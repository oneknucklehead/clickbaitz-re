import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ texts, from, to }) => {
  return (
    <div className="flex text-xs sm:text-md lg:text-xl font-semibold MyGradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {texts.map((text, index) => {
          return (
            <div key={index} className="flex items-center">
              <p className="pr-10 sm:pr-15 lg:pr-20">{text}</p>
              <span className="hidden lg:block pr-10 sm:pr-15 lg:pr-20">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="9.17379" height="10" fill="black" />
                </svg>
              </span>

              <span className="block lg:hidden pr-10 sm:pr-15 lg:pr-20">
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="9.17379" height="10" fill="black" />
                </svg>
              </span>
            </div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {texts.map((text, index) => {
          return (
            <div key={index} className="flex items-center">
              <p className="pr-10 sm:pr-15 lg:pr-20">{text}</p>
              <span className="hidden lg:block pr-10 sm:pr-15 lg:pr-20">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="9.17379" height="10" fill="black" />
                </svg>
              </span>
              <span className="block lg:hidden pr-10 sm:pr-15 lg:pr-20">
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="9.17379" height="10" fill="black" />
                </svg>
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
export default MarqueeItem;
