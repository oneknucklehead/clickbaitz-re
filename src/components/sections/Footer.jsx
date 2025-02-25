import React from "react";
import logo from "../../assets/logo.png";
import pic1 from "../../assets/footer1.jpg";
import pic2 from "../../assets/footer2.jpg";
import pdf from "../../assets/brochure.pdf";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DownloadButton from "../custom/DownloadBtn";

const Footer = () => {
  return (
    // <div className=" p-5">
    <div className="text-theme px-5 xl:px-16 py-12 gap-8">
      {/* <div className=" px-16">
          <img src={logo} alt="Click Baitz Logo" className="mb-8" />
        </div> */}
      <div className="gap-8 text-theme px-2 sm:px-4 xl:px-16 py-8 grid xl:grid-cols-2 w-full">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl text-left md:text-center xl:text-left mb-4">
            We connect with ambitious brands and people.
          </h1>
          <div className="flex md:justify-center xl:justify-start my-12">
            <div className="relative w-40 h-40">
              <motion.img
                src={pic1}
                className="w-40 h-40 absolute border-2 -rotate-1 border-white rounded-lg object-cover object-center"
                alt="picture one"
                initial={{ opacity: 0, x: 50, y: 50, zIndex: 1 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src={pic2}
                className="w-40 h-40 absolute border-2 border-white rounded-lg rotate-6 object-cover object-center"
                alt="picture two"
                initial={{ opacity: 0, y: 50, zIndex: 2 }}
                animate={{ opacity: 1, y: 0, rotate: -5 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src={pic1}
                className="w-40 h-40 border-2 absolute -rotate-3 border-white rounded-lg object-cover object-center"
                alt="picture one"
                initial={{ opacity: 0, x: 50, y: 50, zIndex: 3 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 6 }}
                transition={{
                  delay: 0.8,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="block md:hidden xl:block">
            <ul className="space-y-12">
              <li>
                <h2 className="text-xs md:text-sm font-light pb-1">
                  Interested in working with us?
                </h2>
                <Link
                  to="/call"
                  className="font-semibold border-theme transition-all pb-3 border-b-2 text-base md:text-xl"
                >
                  Book a call
                </Link>
              </li>
              <li>
                <h2 className="text-xs md:text-sm font-light pb-1">
                  Who we are?
                </h2>
                <Link
                  to={"/careers"}
                  className="font-semibold border-theme border-opacity-100 pb-3 border-b-2  text-base md:text-xl"
                >
                  More about us
                </Link>
              </li>
              <li>
                <DownloadButton fileUrl={pdf} fileName={"Brochure.pdf"} />
              </li>
            </ul>
          </div>
          <div className=" hidden md:flex justify-around gap-8 xl:hidden">
            <ul className="space-y-12">
              <li>
                <h2 className="text-xs md:text-sm font-light pb-1">
                  Interested in working with us?
                </h2>
                <Link
                  to="/call"
                  className="font-semibold border-theme transition-all pb-3 border-b-2  text-base md:text-xl"
                >
                  Schedule a meeting with us
                </Link>
              </li>
              <li>
                <h2 className="text-xs md:text-sm font-light pb-1">
                  Want to join the team?
                </h2>
                <Link
                  to={"/careers"}
                  className="font-semibold border-theme border-opacity-100 pb-3 border-b-2  text-base md:text-xl"
                >
                  Learn about joining the Darkside
                </Link>
              </li>
            </ul>
            <ul className="space-y-12">
              <li>
                <h2 className="text-xs md:text-sm font-light pb-1">
                  Fundraising for your startup?
                </h2>
                <Link
                  to={"/about-us"}
                  className="font-semibold border-theme border-opacity-100 pb-3 border-b-2  text-base md:text-xl"
                >
                  Learn about Darkmatter
                </Link>
              </li>
              <li>
                <h2 className="text-xs md:text-sm font-light pb-1">
                  Want to level up your career?
                </h2>
                <Link
                  to={"/dont-know"}
                  className="font-semibold border-theme border-opacity-100 pb-3 border-b-2  text-base md:text-xl"
                >
                  Learn about our University
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="gap-8 items-center text-theme px-2 sm:px-4 xl:px-16 py-24 xl:py-8 grid  lg:grid-cols-2 w-full">
        <div className="block md:flex xl:block justify-around items-center flex-col">
          <p className="text-xs md:text-sm font-light">Email us at:</p>
          <a
            href="mailto:hello@clickbaitz.com"
            className="mt-2 text-base md:text-lg font-semibold"
          >
            hello@clickbaitz.com
          </a>
        </div>
        <div className="block md:flex xl:block justify-around items-center flex-col">
          <p className="text-xs md:text-sm font-light">Stationed at:</p>
          <p className="mt-2 text-left md:text-center xl:text-left text-base md:text-lg">
            31 Dr Ambedkar Sarani, Topsia Road <br />
            Arcadia Center 3rd Floor Kolkata- West Bengal, 700046
          </p>
        </div>
      </div>
      <div className="text-theme flex flex-wrap justify-around xl:justify-between items-center px-2 sm:px-4 xl:px-16 text-sm">
        <div className="flex my-3 justify-center items-center w-full md:w-auto space-x-4">
          <Link
            to={"/terms-and-condition"}
            className="text-xs md:text-sm opacity-50 hover:opacity-100 transition-all duration-200"
          >
            Terms & Conditions
          </Link>
          <Link
            to={"/privacy-policy"}
            className="text-xs md:text-sm opacity-50 hover:opacity-100 transition-all duration-200"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex pb-8 md:pb-0 justify-center items-center  w-full md:w-auto flex-wrap space-x-4">
          <a
            href="#"
            className="text-xs md:text-sm opacity-50 hover:opacity-100 transition-all duration-200"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-xs md:text-sm opacity-50 hover:opacity-100 transition-all duration-200"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-xs md:text-smopacity-50 hover:opacity-100 transition-all duration-200"
          >
            Instagram
          </a>
        </div>
      </div>
      <p className="text-center text-xs">© ClickBaitz Agency 2024</p>
    </div>
    // </div>
  );
};

export default Footer;
