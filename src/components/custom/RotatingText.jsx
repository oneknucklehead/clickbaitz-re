import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

const RotatingText = ({ text, radius = 120, size = 200, speed = 20 }) => {
  const chars = text.split("");
  const angleStep = 360 / chars.length;

  return (
    <div className="flex justify-center items-center">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Rotating Characters */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{ rotate: [0, 360] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: speed,
          }}
        >
          {chars.map((char, i) => {
            const angle = i * angleStep;
            const rad = (angle * Math.PI) / 180;
            const x = radius * Math.cos(rad);
            const y = radius * Math.sin(rad);

            return (
              <span
                key={i}
                className="absolute capitalize text-base md:text-lg font-semibold tracking-wider text-white"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${
                    angle + 90
                  }deg)`,
                }}
              >
                {char}
              </span>
            );
          })}
        </motion.div>

        {/* Static Arrow in Center */}
        <Link
          to={"reputation"}
          className="absolute cursor-pointer -rotate-90 hover:rotate-0 transition-all duration-300 top-1/2 left-1/2 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
        >
          <svg
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.12132 0.87868C3.94975 -0.292893 2.05025 -0.292893 0.87868 0.87868C-0.292893 2.05025 -0.292893 3.94975 0.87868 5.12132L5.12132 0.87868ZM40 43C41.6568 43 43 41.6568 43 40L43 13C43 11.3431 41.6569 10 40 10C38.3431 10 37 11.3431 37 13V37H13C11.3431 37 10 38.3431 10 40C10 41.6569 11.3431 43 13 43L40 43ZM0.87868 5.12132L37.8787 42.1213L42.1213 37.8787L5.12132 0.87868L0.87868 5.12132Z"
              fill="#FDD034"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default RotatingText;
