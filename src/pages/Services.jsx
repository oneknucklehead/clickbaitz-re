import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import services from "@/data/serviceItems";
import ServiceCard from "@/components/custom/ServiceCard";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 5s
  useEffect(() => {
    if (isPaused) return; // don't start interval if paused

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleSwipe = (e, info) => {
    const offset = info.offset.x;
    if (offset < -50) handleNext();
    else if (offset > 50) handlePrevious();
  };

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-10">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)} // pause autoplay on hover
        onMouseLeave={() => setIsPaused(false)} // resume autoplay on leave
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false);
              handleSwipe(e, info);
            }}
            className={`w-full ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            <ServiceCard
              imgUrl={services[currentIndex].img}
              index={"0" + (currentIndex + 1)}
              title={services[currentIndex].title}
              description={services[currentIndex].description}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      {/* <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 transform -translate-y-1/2">
        <motion.button
          onClick={handlePrevious}
          whileHover={{ scale: 1.1 }}
          className="bg-white text-black p-2 rounded-full shadow hover:bg-yellow-200"
        >
          ←
        </motion.button>
        <motion.button
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          className="bg-white text-black p-2 rounded-full shadow hover:bg-yellow-200"
        >
          →
        </motion.button>
      </div> */}

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {services.map((_, idx) => {
          const isActive = idx === currentIndex;
          return (
            <motion.div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              whileHover={{ scale: 1.1 }}
              animate={{
                width: isActive ? 16 : 8,
                height: 8,
                borderRadius: 8,
                backgroundColor: isActive ? "#FDD034" : "rgba(255,255,255,0.2)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="cursor-pointer"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
