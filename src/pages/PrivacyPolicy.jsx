import React from "react";
import privacyContent from "@/data/privacyPolicy";
import AboutGridItems from "@/components/custom/AboutGridItems";
import Footer from "@/components/sections/Footer";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="bg-black text-white">
        <h1 className="text-theme text-6xl text-center py-16">
          Privacy Policy
        </h1>
        <div className="max-w-[1000px] mx-auto">
          {/* <div className="min-h-screen"> */}
          {privacyContent.map((content, index) => (
            <AboutGridItems
              key={index}
              // tagBehind={"story"}
              title={content.title}
              description={content.description}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
