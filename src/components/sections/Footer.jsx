import React from "react";
import logo from "../../assets/logo.png";
import pic1 from "../../assets/footer1.jpg";
import pic2 from "../../assets/footer2.jpg";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="text-theme px-16 py-12 gap-8">
        <div className=" px-16">
          <img src={logo} alt="Click Baitz Logo" className="mb-8" />
        </div>
        <div className="gap-8 text-theme px-16 py-8 grid lg:grid-cols-2 w-full">
          <div className="flex flex-col gap-8 mb-40">
            <h1 className="text-4xl mb-4">
              We connect with ambitious brands and people.
            </h1>
            <div className="relative my-12">
              <motion.img
                src={pic1}
                className="w-40 h-40 absolute inset-0 border-2 -rotate-1 border-white rounded-lg object-cover object-center"
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
                className="w-40 absolute border-2 border-white rounded-lg inset-0 rotate-6 h-40 object-cover object-center"
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
                className="w-40 h-40 border-2 absolute inset-0 -rotate-3 border-white rounded-lg object-cover object-center"
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
          <div className="">
            <div>
              <ul className="space-y-12">
                <li>
                  <h2 className="text-sm font-light pb-1">
                    Interested in working with us?
                  </h2>
                  <Link
                    to="/call"
                    className="font-semibold border-theme transition-all pb-3 border-b-2 text-xl"
                  >
                    Schedule a meeting with us
                  </Link>
                </li>
                <li>
                  <h2 className="text-sm font-light pb-1">
                    Want to join the team?
                  </h2>
                  <Link
                    to={"/careers"}
                    className="font-semibold border-theme border-opacity-100 pb-3 border-b-2 text-xl"
                  >
                    Learn about joining the Darkside
                  </Link>
                </li>
                <li>
                  <h2 className="text-sm font-light pb-1">
                    Fundraising for your startup?
                  </h2>
                  <Link
                    to={"/about-us"}
                    className="font-semibold border-theme border-opacity-100 pb-3 border-b-2 text-xl"
                  >
                    Learn about Darkmatter
                  </Link>
                </li>
                <li>
                  <h2 className="text-sm font-light pb-1">
                    Want to level up your career?
                  </h2>
                  <Link
                    to={"/dont-know"}
                    className="font-semibold border-theme border-opacity-100 pb-3 border-b-2 text-xl"
                  >
                    Learn about our University
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="gap-8 items-center text-theme px-16 py-8 grid  lg:grid-cols-2 w-full">
          <div className="">
            <p className="text-sm font-light">Email us at:</p>
            <a
              href="mailto:hello@clickbaitz.com"
              className="mt-5 text-lg font-semibold"
            >
              hello@clickbaitz.com
            </a>
          </div>
          <div>
            <p className="text-sm font-light">Stationed at:</p>
            <p className="mt-2">
              31 Dr Ambedkar Sarani, Topsia Road <br />
              Arcadia Center 3rd Floor Kolkata- West Bengal, 700046
            </p>
          </div>
        </div>
        <div className="text-theme px-16 py-12 flex justify-between items-center mt-8 pt-4 text-sm">
          <div className="flex space-x-4">
            <Link
              to={"/terms-and-condition"}
              className="opacity-50 hover:opacity-100 transition-all duration-200"
            >
              Terms & Conditions
            </Link>
            <Link
              to={"/privacy-policy"}
              className="opacity-50 hover:opacity-100 transition-all duration-200"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex space-x-4 mt-8">
            <a
              href="#"
              className="opacity-50 hover:opacity-100 transition-all duration-200"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="opacity-50 hover:opacity-100 transition-all duration-200"
            >
              Facebook
            </a>
            <a
              href="#"
              className="opacity-50 hover:opacity-100 transition-all duration-200"
            >
              Instagram
            </a>
          </div>
        </div>
        <p className="text-center text-xs">© ClickBaitz Agency 2024</p>
      </div>
    </>
  );
};

export default Footer;
