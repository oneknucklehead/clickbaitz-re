import React from "react";
import { motion } from "framer-motion";

const MarqueeImageItem = ({ images, from, to }) => {
  return (
    <div className="flex  overflow-hidden MyGradient mb-4">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 rounded-xl"
      >
        {images.map((image, index) => {
          return (
            <img
              className="h-80 mr-4 object-cover rounded-lg"
              src={image}
              key={index}
            />
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 rounded-xl"
      >
        {images.map((image, index) => {
          return (
            <img
              className="h-80 mr-4 object-cover rounded-lg"
              src={image}
              key={index}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeImageItem;
