import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Skeleton + Intersection Observer Lazy Image Component
const ImageWithSkeleton = ({ src }) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  return (
    <div
      ref={imgRef}
      className="relative w-[40vw] sm:w-72 h-[60vw] sm:h-96 mr-4 rounded-sm overflow-hidden flex-shrink-0"
    >
      {!loaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-sm" />
      )}
      {inView && (
        <img
          src={src}
          alt="marquee item"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover object-top rounded-sm transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
};

const MarqueeImageItem = ({ images, from, to }) => {
  const renderImages = () =>
    images.map((image, index) => <ImageWithSkeleton key={index} src={image} />);

  return (
    <div className="flex overflow-hidden MyGradient mb-4">
      {[1, 2].map((_, idx) => (
        <motion.div
          key={idx}
          initial={{ x: from }}
          animate={{ x: to }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {renderImages()}
        </motion.div>
      ))}
    </div>
  );
};

export default MarqueeImageItem;
