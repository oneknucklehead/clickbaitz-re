import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Import images directly
import chamak from "../assets/case-studies/chamak1.jpg";
import chamak2 from "../assets/case-studies/chamak2.jpg";
import chamak3 from "../assets/case-studies/chamakstudy1.jpg";
import chamak4 from "../assets/case-studies/chamakstudy2.jpg";

const list = [
  {
    img: chamak,
    label: "Chamak",
    year: "2024",
    projects: [
      {
        title: "Project Alpha",
        description: "A groundbreaking AI project.",
        image: "/images/alpha.jpg",
      },
      {
        title: "Project Beta",
        description: "Revolutionizing the design industry.",
        image: "/images/beta.jpg",
      },
    ],
  },
  { img: chamak2, label: "Chamak 2" },
  { img: chamak3, label: "Chamak 3" },
  { img: chamak4, label: "Chamak 4" },
];
const archivesData = [
  {
    year: "2024",
    projects: [
      {
        title: "Project Alpha",
        description: "A groundbreaking AI project.",
        image: chamak,
      },
      {
        title: "Project Beta",
        description: "Revolutionizing the design industry.",
        image: chamak2,
      },
    ],
  },
  {
    year: "2023",
    projects: [
      {
        title: "Project Gamma",
        description: "An innovative approach to UX.",
        image: chamak3,
      },
      {
        title: "Project Delta",
        description: "Merging art and technology.",
        image: chamak4,
      },
    ],
  },
];

const Archives = () => {
  const [img, setImg] = useState({ src: "", alt: "", opacity: 0 });
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const spring = { stiffness: 150, damping: 15, mass: 0.1 };
  const imageX = useSpring(0, spring);
  const imageY = useSpring(0, spring);

  const imageRef = useRef(null);

  // Move image near the cursor
  const handleMove = (e) => {
    if (imageRef.current) {
      const offset = 20; // Adjust to position image slightly away from the cursor
      imageX.set(e.clientX + offset);
      imageY.set(e.clientY + offset);
    }
  };

  // Preload images
  useEffect(() => {
    const images = [chamak, chamak2, chamak3, chamak4];
    Promise.all(
      images.map(
        (src) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
          })
      )
    )
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  const [activeYear, setActiveYear] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const toggleYear = (year) => {
    setActiveYear(activeYear === year ? null : year);
    setIsDropdownActive(activeYear !== year);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 relative">
      <h1 className="text-4xl font-bold mb-6">Archives</h1>
      <section onMouseMove={handleMove} className="image_reveal">
        <ul className="case-studies-ul">
          {list.map((item) => (
            <li
              className="case-studies-li"
              key={item.label}
              onMouseEnter={() => {
                setImg({ src: item.img, alt: item.label, opacity: 1 });
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setImg({ src: "", alt: "", opacity: 0 });
                setIsHovered(false);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
        {imagesLoaded ? (
          <motion.img
            ref={imageRef}
            src={img.src}
            alt={img.alt}
            className="hovered_img"
            style={{
              position: "fixed",
              pointerEvents: "none",
              width: "200px",
              height: "auto",

              transform: `translate(-50%, -50%)`, // Center relative to cursor
              x: imageX,
              y: imageY,
              opacity: img.opacity,
              display: isHovered ? "block" : "none",
            }}
          />
        ) : (
          <Skeleton />
        )}
      </section>
      <div className="space-y-4">
        {archivesData.map((archive) => (
          <div key={archive.year} className="border-b border-gray-700 pb-2">
            <button
              className="flex justify-between items-center w-full text-left p-4 text-2xl font-semibold hover:text-gray-300"
              onClick={() => toggleYear(archive.year)}
            >
              {archive.year}
              <motion.div
                animate={{ rotate: activeYear === archive.year ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={24} />
              </motion.div>
            </button>
            <AnimatePresence>
              {activeYear === archive.year && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ul className="p-4 space-y-2">
                    {archive.projects.map((project, index) => (
                      <li
                        key={index}
                        className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition relative"
                        onMouseEnter={() =>
                          !isDropdownActive && setHoveredImage(project.image)
                        }
                        onMouseLeave={() => setHoveredImage(null)}
                      >
                        <h3 className="text-lg font-medium">{project.title}</h3>
                        <p className="text-gray-400 text-sm">
                          {project.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      {!isDropdownActive && hoveredImage && (
        <motion.img
          src={hoveredImage}
          alt="Preview"
          className="absolute top-1/2 right-10 w-40 h-auto rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
};
const Skeleton = () => (
  <div
    className="skeleton"
    style={{
      position: "absolute",
      width: "200px",
      height: "200px",
      backgroundColor: "#e0e0e0",
      borderRadius: "8px",
    }}
  />
);

export default Archives;
