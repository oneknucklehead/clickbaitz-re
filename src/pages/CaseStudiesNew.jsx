import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";
import "../css/CaseStudiesNew.css";

// Import images directly
import chamak from "../assets/case-studies/chamak1.jpg";
import chamak2 from "../assets/case-studies/chamak2.jpg";
import chamak3 from "../assets/case-studies/chamakstudy1.jpg";
import chamak4 from "../assets/case-studies/chamakstudy2.jpg";

const CaseStudiesNew = () => {
  const [img, setImg] = useState({ src: "", alt: "", opacity: 0 });
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  const list = [
    {
      img: chamak,
      label: "Chamak",
      service: "ui/ux",
      industries: "industry",
      years: "2024",
    },
    {
      img: chamak2,
      label: "Chamak 2",
      service: "ui/ux",
      industries: "industry",
      years: "2024",
    },
    {
      img: chamak3,
      label: "Chamak 3",
      service: "ui/ux",
      industries: "industry",
      years: "2024",
    },
    {
      img: chamak4,
      label: "Chamak 4",
      service: "ui/ux",
      industries: "industry",
      years: "2024",
    },
  ];

  return (
    <section onMouseMove={handleMove} className="image_reveal">
      <ul className="list-none p-5 w-full">
        <table className="table-auto w-full">
          <thead className="w-full border-b-[1px]">
            <tr className="uppercase text-white/50">
              <th className="text-left py-5 font-normal">Projects</th>
              <th className="text-left py-5 font-normal">Services</th>
              <th className="text-right py-5 font-normal">Industries</th>
              <th className="text-right py-5 font-normal">Years</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              // <li className="relative">
              <tr
                key={item.label}
                className="relative text-xl border-b-[1px] font-medium cursor-pointer w-full text-left"
                // onClick={() =>
                //   setActiveDropdown(activeDropdown === index ? null : index)
                // }
                onMouseEnter={() => {
                  if (activeDropdown === null) {
                    setImg({ src: item.img, alt: item.label, opacity: 1 });
                    setIsHovered(true);
                  }
                }}
                onMouseLeave={() => {
                  if (activeDropdown === null) {
                    setImg({ src: "", alt: "", opacity: 0 });
                    setIsHovered(false);
                  }
                }}
              >
                <td className={`py-5 text-left text-white`}>{item.label}</td>
                <td className="py-5 text-left text-white/50">{item.service}</td>
                <td className="py-5 text-right text-white/50">
                  {item.industries}
                </td>
                <td className="py-5 text-right text-white/50">{item.years}</td>
              </tr>
              // </li>
            ))}
          </tbody>
        </table>
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
          }}
          initial={{ opacity: 0, scale: 0.9 }} // Initial state (hidden and slightly scaled down)
          animate={{
            opacity: img.opacity, // Animate opacity based on hover state
            scale: img.opacity === 1 ? 1 : 0.9, // Scale up when visible
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
        />
      ) : (
        <Skeleton />
      )}
    </section>
  );
};

// Skeleton Component
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

export default CaseStudiesNew;
