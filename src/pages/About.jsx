import AboutGridItems from "@/components/custom/AboutGridItems";
import DownloadButton from "@/components/custom/DownloadBtn";
import Footer from "@/components/sections/Footer";
import axios from "axios";
import React, { useState } from "react";
import pdf from "../assets/brochure.pdf";
import { Oval } from "react-loader-spinner";
import Nav from "@/components/custom/NavbarNew";

const About = () => {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");
  const [showRes, setShowRes] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleSubmit = () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      // console.log("Valid email:", email);

      setLoader(true);
      axios.defaults.headers.post["Content-Type"] = "application/json";
      axios
        .post("https://formsubmit.co/ajax/zohebahmed1542@gmail.com", {
          email: email,
        })
        .then((response) => {
          console.log(response);
          setLoader(false);
          if (response.data.success === "true") {
            setResult("Thank you for choosing us!");
            setShowRes(true);
          } else {
            // setResultBorder("#FCE205");
            setResult(
              "⚠️ There was an error submitting your email, try refreshing the page and sending your email again. Inconvenience is regretted."
            );
            setShowRes(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setLoader(false);
          // setResultBorder("#DC3232");
          setResult(
            "There was an error submitting your email, try refreshing the page and sending your email again. Inconvenience is regretted."
          );
          setShowRes(false);
        });
    } else {
      setResult("Invalid email");
    }
  };

  return (
    <div className="bg-black text-white">
      <div>
        <Nav />
      </div>
      <div className="py-16 px-4">
        <h1 className="text-theme px-4 text-4xl sm:text-5xl xl:text-6xl text-center pb-12 pt-16 xl:pt-16 xl:pb-16">
          Creating compelling stories <br /> that fuel business growth
        </h1>
        <div className="max-w-[1000px] mx-auto">
          {/* <div className="min-h-screen"> */}
          <AboutGridItems
            tagBehind={"story"}
            title={"Our story"}
            description={`ClickBaitz was founded by three friends who share a passion for creating
        captivating stories and impactful campaigns. In today’s advertising
        landscape, where the focus often shifts to trends, we return to the
        principles of the "Golden Age of Advertising," which emphasized mass
        media and broad audience reach. Our advertising approach prioritizes
        brand storytelling, emotional resonance, and large-scale campaigns to
        enhance recognition and influence consumer behaviour. At ClickBaitz, we
        believe that bold ideas are the cornerstone of success and that
        effective marketing leads to powerful sales.`}
          />
          <AboutGridItems
            tagBehind={"About"}
            title={"Why Us"}
            description={`We provide a full spectrum of services designed to elevate your business, including performance marketing, social media marketing, CGI and 3D animation, video production and commercial shoots. Our team of highly skilled professionals is committed to transforming your vision into reality, ensuring your business stands out in a competitive marketplace. We specialize in crafting unique and memorable brand identities that resonate with your audience, setting you apart in your industry. Through data-driven marketing strategies and compelling creative campaigns, we ensure your message reaches the right people at the right time, driving both awareness and conversion. Additionally, our web solutions are designed to provide seamless, user-friendly experiences that enhance your online presence, engage visitors, and ultimately turn them into loyal customers. At the heart of our approach is a deep commitment to collaboration and a shared vision for success. We work closely with you to understand your business, its challenges, and its goals, ensuring that every service we provide is aligned with your specific needs. From conceptualization to execution, we are dedicated to helping you achieve measurable, sustainable growth while telling a powerful and authentic story that connects with your audience on a deeper level. Together, we’ll build the foundation for your brand’s long-term success.`}
          />
          {/* </div> */}
          <div className="flex flex-col justify-center items-center py-12 lg:py-16 px-4">
            <h3 className="text-theme text-center text-2xl font-semibold">
              Curious to learn more?{" "}
            </h3>
            <h3 className="md:text-2xl text-center text-white/80">
              Enter your email to gain exclusive access to our portfolio.
            </h3>
            <div className="flex items-center justify-center w-full gap-4">
              <div className=" md:w-[50%] my-4 relative flex justify-center">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-8 py-4 placeholder:text-white placeholder:font-semibold rounded-lg focus:outline-none focus:ring-0 bg-white/30"
                ></input>

                <button
                  className="absolute right-4 top-3 p-2 rounded-full bg-white"
                  onClick={() => handleSubmit()}
                  disabled={loader}
                >
                  {loader ? (
                    <Oval
                      visible={true}
                      width="15"
                      height="16"
                      color="#000000"
                      strokeWidth="6"
                      ariaLabel="oval-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  ) : (
                    <svg
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7455 8.70711C14.136 8.31658 14.136 7.68342 13.7455 7.29289L7.38155 0.928932C6.99103 0.538408 6.35786 0.538408 5.96734 0.928932C5.57681 1.31946 5.57681 1.95262 5.96734 2.34315L11.6242 8L5.96734 13.6569C5.57681 14.0474 5.57681 14.6805 5.96734 15.0711C6.35786 15.4616 6.99103 15.4616 7.38155 15.0711L13.7455 8.70711ZM0 9H13.0384V7H0L0 9Z"
                        fill="black"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {showRes && (
                <div>
                  <DownloadButton fileUrl={pdf} fileName={"Portfolio.pdf"} />
                </div>
              )}
            </div>

            <div className="text-xs">{result}</div>
          </div>
          <AboutGridItems
            tagBehind={"Join"}
            title={"WHAT CAN WE DO TOGETHER?"}
            description={`Together, we can unlock your business's full potential by building a strong, memorable brand that resonates with your audience. We will create innovative marketing campaigns that drive engagement, generate leads, and deliver measurable results. By combining your vision and expertise with our creative and strategic capabilities, we will craft a unique story for your brand and bring it to life across multiple platforms. Whether you're launching a new product, expanding into new markets, or refining your digital presence, our collaboration will ensure your goals are met with precision and impact. Let’s work together to transform challenges into opportunities and pave the way for sustainable growth and success.`}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
