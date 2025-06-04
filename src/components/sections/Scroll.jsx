import React, { useEffect, useState, Suspense, lazy } from "react";
import {
  Link as LinkScroll,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { motion } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import buttonDetails from "@/data/buttonDetailsReputation";
import { Link } from "react-router-dom";
import models from "@/data/models";

import services from "@/data/serviceItems";
import ModelElement from "../custom/ModelElement";
import ServiceCard from "../custom/ServiceCard";

// const ModelElement = lazy(() => import("../custom/ModelElement"));
// const ServiceCard = lazy(() => import("../custom/ServiceCard"));
const ScrollSection = () => {
  const [image, setImage] = useState(
    buttonDetails[buttonDetails.length - 1].img
  );
  const [imageIndex, setImageIndex] = useState(
    buttonDetails[buttonDetails.length - 1].index
  );
  const [imageLink, setImageLink] = useState(
    buttonDetails[buttonDetails.length - 1].link
  );
  const [imageClientName, setImageClientName] = useState(
    buttonDetails[buttonDetails.length - 1].clientName
  );
  const [imageClientWork, setImageClientWork] = useState(
    buttonDetails[buttonDetails.length - 1].work
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleMainImage = (button) => {
    setImage(button.img);
    setImageIndex(button.index);
    setImageLink(button.link);
    setImageClientName(button.clientName);
    setImageClientWork(button.work);
  };

  const SkeletonBox = ({ height = "200px" }) => (
    <div
      className="bg-gray-200 animate-pulse rounded"
      style={{ height: height }}
    ></div>
  );

  return (
    <div className="relative p-5 grid grid-cols-12 text-white">
      {/* Left Navigation with sticky positioning */}
      <div className="xl:col-span-2 hidden xl:block">
        <ul className="flex gap-1 pt-12 sticky top-0 flex-col text-theme text-xs">
          <LinkScroll
            id="reputation-anchor"
            to="reputation"
            className="cursor-pointer transition-all border-l-2 border-transparent hover:font-semibold hover:pl-2"
            activeClass="font-semibold border-l-2 transition-all pl-2 border-transparent border-theme"
            spy={true}
            smooth={true}
            duration={100}
          >
            Our Reputation
          </LinkScroll>
          {/* <Element name="model"> */}
          <LinkScroll
            id="model-anchor"
            className="cursor-pointer	transition-all  border-l-2 border-transparent hover:font-semibold hover:pl-2"
            to="model"
            activeClass="font-semibold border-l-2 transition-all pl-2 border-transparent border-theme"
            spy={true}
            smooth={true}
            duration={100}
          >
            Our Model
          </LinkScroll>
          {/* </Element> */}
          <LinkScroll
            id="services-anchor"
            className="cursor-pointer	transition-all  border-l-2 border-transparent hover:font-semibold hover:pl-2"
            to="services"
            activeClass="font-semibold border-l-2 transition-all pl-2 border-transparent border-theme"
            spy={true}
            smooth={true}
            duration={100}
          >
            Our Services
          </LinkScroll>
        </ul>
      </div>

      {/* Right Content Area */}
      <div className="col-span-12 xl:col-span-10">
        <div className="py-24 px-2 sm:px-4 xl:px-8 w-full" id="reputation">
          <h1 className="text-4xl lg:text-5xl text-theme">
            Building Trust, Elevating Impact:
          </h1>
          <h3 className="text-3xl lg:text-4xl py-2 lg:py-4 font-light">
            Your Reputation, Our Commitment.
          </h3>
          <div className="h-full">
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-2 gap-12">
              <div className="col-span-2 lg:col-span-1">
                <div className="pt-12">
                  <p className="text-theme text-sm sm:text-lg lg:text-xl font-light">
                    Trusted campaigns
                  </p>
                  <div className="py-2 lg:py-4">
                    <h1 className="text-theme text-4xl lg:text-6xl font-semibold">
                      Click Baitz
                    </h1>
                    <h3 className="text-theme text-2xl md:text-4xl ">Agency</h3>
                  </div>
                </div>
                <div className="py-2 md:py-4">
                  <p className="text-sm md:text-base">
                    Welcome to Click Baitz, your partner in creative innovation
                    and digital growth. We specialize in transforming brands
                    through website design, branding, and comprehensive social
                    media management, while offering expert marketplace and
                    production services. Let us bring your vision to life with
                    standout merchandising, media strategies, and tailored
                    content creation.
                  </p>
                </div>
                <div className="my-2">
                  <button className="bg-theme hover:bg-[#e2c036] transition-all duration-300 group text-black font-semibold flex gap-2 items-center py-2 md:py-2 px-3 md:px-4 rounded-lg">
                    <Link to={"/case-studies"} className="text-xs md:text-base">
                      See examples of our works
                    </Link>
                    <span className="hidden md:block rotate-45 group-hover:rotate-12 transition-all duration-300">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.182 1.18201C11.182 0.629723 10.7343 0.182008 10.182 0.182008L1.18201 0.182007C0.629723 0.182007 0.182008 0.629722 0.182008 1.18201C0.182008 1.73429 0.629723 2.18201 1.18201 2.18201L9.18201 2.18201L9.18201 10.182C9.18201 10.7343 9.62972 11.182 10.182 11.182C10.7343 11.182 11.182 10.7343 11.182 10.182L11.182 1.18201ZM1.70711 11.0711L10.8891 1.88911L9.4749 0.474901L0.292893 9.65691L1.70711 11.0711Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    <span className="block md:hidden rotate-45 group-hover:rotate-12 transition-all duration-300">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.182 1.18201C11.182 0.629723 10.7343 0.182008 10.182 0.182008L1.18201 0.182007C0.629723 0.182007 0.182008 0.629722 0.182008 1.18201C0.182008 1.73429 0.629723 2.18201 1.18201 2.18201L9.18201 2.18201L9.18201 10.182C9.18201 10.7343 9.62972 11.182 10.182 11.182C10.7343 11.182 11.182 10.7343 11.182 10.182L11.182 1.18201ZM1.70711 11.0711L10.8891 1.88911L9.4749 0.474901L0.292893 9.65691L1.70711 11.0711Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-span-3 lg:col-span-1">
                <div className="grid grid-cols-6 md:grid-cols-5 h-full gap-5">
                  {/* IMAGES */}
                  <div className="col-span-3 relative flex justify-center items-center">
                    <div className="absolute flex justify-center items-center w-full h-full">
                      <img
                        src={image}
                        className="rounded-lg absolute w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="absolute rounded-lg inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>

                    {/* Content */}
                    {/* <div className="transition-all absolute inset-0 bottom-6 flex flex-col items-center justify-end px-6">
                      <p className="text-xs lg:text-base">{imageClientName}</p>
                      <h1 className="text-white text-center text-xl lg:text-3xl font-bold">
                        {imageClientWork}
                      </h1>
                    </div> */}
                    <div className="absolute top-0 w-full flex justify-between p-5">
                      <div className="">
                        <p>{imageIndex}.</p>
                      </div>
                      <Link
                        to={imageLink}
                        className="border-2 p-2 rounded-full cursor-pointer"
                      >
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0001 1.53784C12.0001 0.985556 11.5524 0.537841 11.0001 0.537841L2.00012 0.537842C1.44784 0.537841 1.00012 0.985556 1.00012 1.53784C1.00012 2.09013 1.44784 2.53784 2.00012 2.53784L10.0001 2.53784L10.0001 10.5378C10.0001 11.0901 10.4478 11.5378 11.0001 11.5378C11.5524 11.5378 12.0001 11.0901 12.0001 10.5378L12.0001 1.53784ZM1.70723 12.2449L11.7072 2.24495L10.293 0.830735L0.293015 10.8307L1.70723 12.2449Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  {/* BUTTONS */}
                  <div className="col-span-3 md:col-span-2 w-full flex flex-col-reverse justify-center gap-3">
                    {buttonDetails.map((button, index) => (
                      <div key={index}>
                        <button
                          onClick={() => handleMainImage(button)}
                          className={`rounded-lg w-full p-3 md:p-4 lg:p-3 ${button.color} transition-all duration-300 hover:opacity-85 text-black flex items-center gap-1 md:gap-2`}
                        >
                          <span
                            className="hidden md:block"
                            dangerouslySetInnerHTML={{ __html: button.logo }}
                          />
                          <span
                            className="block md:hidden"
                            dangerouslySetInnerHTML={{ __html: button.logoMob }}
                          />
                          <span className="text-xs sm:text-base lg:text-xl font-semibold">
                            {button.tagline}
                          </span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="min-h-screen md:py-24 px-2 sm:px-4 xl:px-8 w-full"
          id="model"
        >
          <div>
            <h1 className="text-4xl lg:text-5xl  text-theme">
              Innovative Models,
            </h1>
            <h1 className="text-4xl lg:text-5xl  text-theme">
              Exceptional Results.
            </h1>
            <h3 className="text-3xl lg:text-4xl py-2 lg:py-4 font-light">
              Go beyond simple media buying.
            </h3>
          </div>
          <div className="hidden md:flex w-full items-start gap-20">
            <div className="w-full py-[45vh]">
              <div>
                <Suspense fallback={<SkeletonBox height="200px" />}>
                  <ul>
                    {models.map((model, index) => (
                      <li key={index}>
                        <ModelElement id={model.index}>
                          <p className="text-xs sm:text-sm lg:text-base">
                            {model.index}.
                          </p>
                          <h1 className="py-4 pl-4 text-theme font-heading text-4xl lg:text-5xl">
                            {model.title}
                          </h1>
                          <p className="text-sm lg:text-base">
                            {model.description}
                          </p>
                        </ModelElement>
                      </li>
                    ))}
                  </ul>
                </Suspense>
              </div>
            </div>
            <div className="sticky top-0 flex h-screen w-full items-center">
              <div className="relative rounded-2xl aspect-square w-full bg-gray-100">
                {models.map((model, index) => (
                  <model.color
                    key={index}
                    id={model.index}
                    activate={true}
                  ></model.color>
                ))}
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <ul className="max-w-md mx-auto py-24">
              {/* <div>
                <div className="relative rounded-2xl aspect-square w-full bg-gray-100">
                  {models.map((model, index) => (
                    <model.color key={index} id={model.index}></model.color>
                  ))}
                </div>
              </div> */}
              {models.map((model, index) => (
                <li key={index} className="">
                  <div className="relative rounded-2xl aspect-square w-full bg-gray-100">
                    <model.color
                      key={index}
                      id={model.index}
                      activate={false}
                    ></model.color>
                  </div>
                  <div id={model.index} className="py-8">
                    {/* <p className="text-xs sm:text-sm lg:text-base">
                        {model.index}.
                      </p> */}
                    <h1 className="py-4 text-theme font-heading text-4xl lg:text-5xl">
                      {model.title}
                    </h1>
                    <p className="text-sm lg:text-base">{model.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="min-h-screen py-24 px-2 sm:px-4 xl:px-8 w-full"
          id="services"
        >
          <h1 className="text-4xl lg:text-5xl text-theme">What we do.</h1>
          <h3 className="text-3xl lg:text-4xl py-2 lg:py-4 font-light">
            Core Services.
          </h3>
          <div className="w-full py-8">
            <Tabs defaultValue="creativeDesign">
              <div className="flex justify-center">
                <TabsList className="bg-[#FDD034] text-black">
                  <div className="">
                    {services.map((service, index) => (
                      <TabsTrigger key={index} value={service.id}>
                        {index + 1}
                      </TabsTrigger>
                    ))}
                  </div>
                </TabsList>
              </div>

              {services.map((service, index) => (
                <TabsContent key={index} value={service.id}>
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Suspense fallback={<SkeletonBox height="300px" />}>
                      <ServiceCard
                        imgUrl={service.img}
                        index={service.index}
                        title={service.title}
                        description={service.description}
                        link={service.link}
                      />
                    </Suspense>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          {/* <div>
            <TabComponent />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
