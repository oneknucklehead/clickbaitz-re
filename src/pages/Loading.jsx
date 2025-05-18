import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0d0d]">
      <div className="flex items-center space-x-2">
        {/* Spinning Circle */}
        <motion.div
          className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 1,
          }}
        />
        {/* Text */}
        <span className="text-yellow-400 text-sm">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
