import React from "react";
import logo from "../../assets/logo.png";
import pic1 from "../../assets/footer1.webp";
import pic2 from "../../assets/footer2.webp";
import pdf from "../../assets/brochure.pdf";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DownloadButton from "../custom/DownloadBtn";

const Footer = () => {
  return (
    // <div className=" p-5">
    <div className="text-theme max-w-screen-2xl mx-auto p-5 gap-8 min-h-screen flex justify-center flex-col">
      {/* <div className=" px-16">
          <img src={logo} alt="Click Baitz Logo" className="mb-8" />
        </div> */}
      <div className="gap-8 text-theme px-2 sm:px-4 xl:px-8 py-8 grid xl:grid-cols-2 w-full">
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl sm:text-3xl xl:text-4xl  text-left md:text-center xl:text-left ">
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
        <div className="block">
          <ul className="space-y-12 md:space-y-0 xl:space-y-12 md:flex justify-around flex-wrap gap-8 xl:block">
            <li className="flex justify-start items-start md:justify-center xl:justify-start md:items-center xl:items-start flex-col">
              <h2 className="text-xs md:text-sm font-light pb-1">
                Interested in working with us?
              </h2>
              <Link
                to="/call"
                className="font-semibold border-theme transition-all pb-3 border-b-2 text-base md:text-xl"
              >
                Book a call
              </Link>
              {/* <button
                onClick={() => {
                  window.Calendly.initPopupWidget({
                    url: "https://calendly.com/zohebcool1542/demo",
                  });
                }}
                className="font-semibold border-theme transition-all pb-3 border-b-2 text-base md:text-xl"
              >
                <span className="">Book a Call</span>
              </button> */}
            </li>
            <li className="flex justify-start items-start md:justify-center xl:justify-start md:items-center xl:items-start flex-col">
              <h2 className=" text-xs md:text-sm font-light pb-1">
                Who we are?
              </h2>
              <Link
                to={"/about"}
                className="font-semibold border-theme border-opacity-100 pb-3 border-b-2  text-base md:text-xl"
              >
                More about us
              </Link>
            </li>
            {/* <li>
                <DownloadButton fileUrl={pdf} fileName={"Brochure.pdf"} />
              </li> */}
          </ul>
        </div>
      </div>

      <div className="gap-8 items-center text-theme px-2 sm:px-4 xl:px-8 xl:py-8 grid  xl:grid-cols-2 w-full">
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
          <p className="text-xs md:text-sm font-light flex gap-2 items-center">
            Stationed at:
            <a href="https://maps.app.goo.gl/GSYt6stLjTKyQKua7">
              <span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1187 1.8813C12.1187 1.32902 11.671 0.881302 11.1187 0.881302H2.1187C1.56641 0.881302 1.1187 1.32902 1.1187 1.8813C1.1187 2.43359 1.56641 2.8813 2.1187 2.8813H10.1187V10.8813C10.1187 11.4336 10.5664 11.8813 11.1187 11.8813C11.671 11.8813 12.1187 11.4336 12.1187 10.8813V1.8813ZM1 12L1.70711 12.7071L11.8258 2.58841L11.1187 1.8813L10.4116 1.1742L0.292893 11.2929L1 12Z"
                    fill="#FDD034"
                  />
                </svg>
              </span>
            </a>
          </p>
          <p className="mt-2 text-left md:text-center xl:text-left text-base md:text-lg">
            <b>Fatma Court</b>
            <br />
            59/C Tiljala Road 4th floor - Kolkata - 700046
            <br />
            Landmark - 4 no bridge Masjid
          </p>
        </div>
      </div>
      <div className="text-theme flex flex-wrap justify-around xl:justify-between items-center px-2 sm:px-4 xl:px-8 text-sm">
        <div className="flex my-3 text-center justify-center items-center w-full md:w-auto space-x-4">
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
          <Link
            to={"/payment-policy"}
            className="text-xs md:text-sm opacity-50 hover:opacity-100 transition-all duration-200"
          >
            Payment Policy
          </Link>
        </div>
        <div className="flex pb-8 md:pb-0 justify-center items-center  w-full md:w-auto flex-wrap space-x-4">
          <a
            href="https://www.linkedin.com/company/click-baitz/"
            className="text-xs md:text-sm opacity-50 hover:opacity-100 transition-all duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/clickbaiitz"
            className="text-xs md:text-sm opacity-50 hover:opacity-100 transition-all duration-200"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/click.baitz_/"
            className="text-xs md:text-sm opacity-50 hover:opacity-100 transition-all duration-200"
          >
            Instagram
          </a>
        </div>
      </div>
      <p className="text-center text-xs">
        © ClickBaitz Agency {new Date().getFullYear()}
      </p>
    </div>
    // </div>
  );
};

export default Footer;
