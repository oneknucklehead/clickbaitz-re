import AboutGridItems from "@/components/custom/AboutGridItems";
import Footer from "@/components/sections/Footer";
import tncContent from "@/data/termsAndCondition";

const TermsAndCondition = () => {
  return (
    <div>
      <div className="bg-black text-white">
        <h1 className="text-theme text-6xl text-center py-16">
          Terms and Conditions
        </h1>
        <div className="max-w-[1000px] mx-auto">
          {/* <div className="min-h-screen"> */}
          {tncContent.map((content, index) => (
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

export default TermsAndCondition;
