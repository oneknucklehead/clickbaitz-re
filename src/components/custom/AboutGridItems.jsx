import React from "react";

const AboutGridItems = ({ tagBehind, title, description }) => {
  return (
    <div className="relative py-12 grid h-full grid-cols-2">
      <div className="uppercase absolute text-[15vw] font-bold text-white opacity-10 inset-0 flex items-center justify-center">
        {tagBehind}
      </div>
      <div className="text-theme text-2xl font-semibold">{title}</div>
      <div className="font-light">{description}</div>
    </div>
  );
};

export default AboutGridItems;
