import AboutGridItems from "@/components/custom/AboutGridItems";
import Nav from "@/components/custom/NavbarNew";
import Footer from "@/components/sections/Footer";
import tncContent from "@/data/termsAndCondition";

const TermsAndCondition = () => {
  return (
    <div className=" bg-[#0d0d0d]">
      <div>
        <Nav />
      </div>
      <div className="py-16 px-4 text-white">
        <h1 className="text-theme px-4 text-4xl sm:text-5xl xl:text-6xl text-center pt-16 xl:pt-16">
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
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default TermsAndCondition;
