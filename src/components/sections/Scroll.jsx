import React, { useEffect, useState } from "react";
import {
  Link as LinkScroll,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import buttonDetails from "@/data/buttonDetailsReputation";
import { Link } from "react-router-dom";
import models from "@/data/models";
import ModelElement from "../custom/ModelElement";
import imgUrl from "../../assets/reputation/pic1.jpg";
import ModelCard, { Colors, SchedulingLinks, Team } from "../custom/ModelCard";
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

  return (
    <div className="relative grid grid-cols-12 text-white">
      {/* Left Navigation with sticky positioning */}
      <div className="col-span-1">
        <ul className="flex gap-1 sticky p-3 top-0 flex-col text-theme text-xs">
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
      <div className="col-span-11">
        <div className="py-24 px-8 w-full" id="reputation">
          <h1 className="text-5xl text-theme">Lorem ipsum dolor sit amet</h1>
          <h3 className="text-4xl py-4 font-light">drive business growth.</h3>
          <div className="h-full">
            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="pt-12">
                  <p className="text-theme text-xl font-light">
                    Trusted campaigns
                  </p>
                  <div className="py-4">
                    <h1 className="text-theme text-6xl font-semibold">
                      Click Baitz
                    </h1>
                    <h3 className="text-theme text-4xl ">Agency</h3>
                  </div>
                </div>
                <div className="pb-4">
                  <p>
                    Believe in Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Believe in Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="my-2">
                  <button className="bg-theme text-black font-semibold flex gap-2 items-center py-2 px-4 rounded-lg">
                    <p>See examples of our works</p>
                    <span>
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
                  </button>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 h-full gap-5">
                  {/* IMAGES */}
                  <div className="col-span-1 relative flex justify-center items-center">
                    <div className="absolute flex justify-center items-center w-full h-full">
                      <img
                        src={image}
                        className="rounded-lg absolute w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute rounded-lg inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>

                    {/* Content */}
                    <div className="transition-all absolute inset-0 bottom-6 flex flex-col items-center justify-end px-6">
                      <p className="">{imageClientName}</p>
                      <h1 className="text-white text-center text-3xl font-bold">
                        {imageClientWork}
                      </h1>
                    </div>
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
                  <div className=" col-span-1 w-full flex flex-col-reverse justify-center gap-3">
                    {buttonDetails.map((button, index) => (
                      <div key={index}>
                        <button
                          onClick={() => handleMainImage(button)}
                          className={`rounded-lg w-full p-4 ${button.color} transition-all hover:opacity-90 text-black flex items-center gap-2`}
                        >
                          <span
                            dangerouslySetInnerHTML={{ __html: button.logo }}
                          />
                          <span className="text-xl font-semibold">
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
        <div className="min-h-screen py-24 px-8 w-full" id="model">
          <div>
            <h1 className="text-5xl text-theme">Lorem ipsum dolor sit amet,</h1>
            <h1 className="text-5xl text-theme">consectetur adipiscing.</h1>
            <h3 className="text-4xl py-4 font-light">
              Go beyond simple media buying.
            </h3>
          </div>
          <div className="flex w-full items-start gap-20">
            <div className="w-full py-[30vh]">
              <div>
                <ul>
                  {models.map((model, index) => (
                    <li key={index}>
                      <ModelElement id={model.index}>
                        <p>{model.index}.</p>
                        <h1 className="py-4 pl-4 text-theme font-heading text-5xl">
                          {model.title}
                        </h1>
                        <p>{model.description}</p>
                      </ModelElement>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="sticky top-0 flex h-screen w-full items-center">
              <div className="relative rounded-2xl aspect-square w-full bg-gray-100">
                {models.map((model, index) => (
                  <model.color key={index} id={model.index}></model.color>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-screen py-24 px-8 w-full" id="services">
          <h1 className="text-5xl text-theme">What we do.</h1>
          <h3 className="text-4xl py-4 font-light">Core Services.</h3>
          <div className="w-full">
            <Tabs defaultValue="creativeDesign" className="">
              <div className="flex justify-center">
                <TabsList className="bg-[#FDD034] text-black">
                  <TabsTrigger value="creativeDesign">
                    Creative & Design
                  </TabsTrigger>
                  <TabsTrigger value="amazon">Amazon Management</TabsTrigger>
                  <TabsTrigger value="development">Development</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="creativeDesign">
                <div className=" max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center p-6 md:p-8 bg-[#FDD034] rounded-lg shadow-md">
                  {/* Left Section */}
                  <div className="order-2 md:order-1 col-span-1 w-full flex justify-center md:justify-start items-center rounded-xl bg-[#FDD034]">
                    <CardHeader>
                      <CardDescription className="text-black text-3xl font-light">
                        01
                      </CardDescription>
                      <CardTitle className="py-4 pl-4 text-black font-heading text-5xl">
                        Creative & Design
                      </CardTitle>
                      <CardDescription className="text-black text-xl">
                        Design is at the heart of all that we do. Our talented
                        team of illustrators and animators are ready to create
                        outstanding appearances.
                      </CardDescription>
                      <p className="text-black text-sm py-4">
                        Starts at $3,000/mo
                      </p>
                      <div className="my-2">
                        <button className="hover:opacity-90 bg-yellow-200 text-black font-semibold flex gap-2 items-center py-2 px-4 rounded-lg">
                          <p>Learn more</p>
                          <span>
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
                        </button>
                      </div>
                    </CardHeader>
                  </div>

                  {/* Right Section - Image */}
                  <div className="order-1 md:order-2 col-span-1 mt-8 md:mt-0 h-fit w-full relative flex justify-center lg:justify-end">
                    {/* First shadow layer */}
                    <div className="absolute h-full w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] bg-yellow-100 rounded-lg translate-x-4 translate-y-4 shadow-lg"></div>

                    {/* Second shadow layer */}
                    <div className="absolute h-full w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] bg-yellow-200 rounded-lg translate-x-2 translate-y-2 shadow-lg"></div>

                    {/* Actual Image */}
                    <img
                      src={imgUrl}
                      alt="Creative Design"
                      className="relative h-full w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="amazon">
                Change your password here.
              </TabsContent>
              <TabsContent value="development">development</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
