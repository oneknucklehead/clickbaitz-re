import React from "react";

const AboutGridItems = ({ tagBehind = null, title, description }) => {
  return (
    <div className="relative py-16 px-4 grid h-full lg:grid-cols-2">
      {tagBehind && (
        <div className="uppercase absolute text-[22vw] lg:text-[15vw] font-bold text-white opacity-10 inset-0 flex items-center justify-center">
          {tagBehind}
        </div>
      )}
      <div className="text-theme text-2xl font-semibold">{title}</div>
      <div className="font-light text-white/80 text-sm md:text-base pt-8">
        {description}
      </div>
    </div>
  );
};

export default AboutGridItems;
