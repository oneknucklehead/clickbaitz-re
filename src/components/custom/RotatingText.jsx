import React, { useEffect, useRef } from "react";
import "../../css/Circle.css";
const RotatingText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef != null) {
      textRef.current.innerHTML = textRef.current.innerText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 8.1}deg)">${char}</span>`
        )
        .join("");
    }
  }, []);

  return (
    <div>
      <div className="flex w-full justify-center xl:ml-14">
        <div
          className="circle md:ml-20 h-fit w-full"
          //   data-aos="fade-up"
          //   data-aos-duration="1000"
          // data-aos-delay="200"
        >
          {/* <img
            className="logo object-contain"
            src={contactImg}
            alt="coffee contact section"
          ></img> */}

          <span className="hidden lg:block text-theme">
            <svg
              width="40"
              height="40"
              viewBox="0 0 43 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.12132 0.87868C3.94975 -0.292893 2.05025 -0.292893 0.87868 0.87868C-0.292893 2.05025 -0.292893 3.94975 0.87868 5.12132L5.12132 0.87868ZM40 43C41.6568 43 43 41.6568 43 40L43 13C43 11.3431 41.6569 10 40 10C38.3431 10 37 11.3431 37 13V37H13C11.3431 37 10 38.3431 10 40C10 41.6569 11.3431 43 13 43L40 43ZM0.87868 5.12132L37.8787 42.1213L42.1213 37.8787L5.12132 0.87868L0.87868 5.12132Z"
                fill="#FDD034"
              />
            </svg>
          </span>
          <span className="hidden md:block lg:hidden text-theme">
            <svg
              width="30"
              height="30"
              viewBox="0 0 43 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.12132 0.87868C3.94975 -0.292893 2.05025 -0.292893 0.87868 0.87868C-0.292893 2.05025 -0.292893 3.94975 0.87868 5.12132L5.12132 0.87868ZM40 43C41.6568 43 43 41.6568 43 40L43 13C43 11.3431 41.6569 10 40 10C38.3431 10 37 11.3431 37 13V37H13C11.3431 37 10 38.3431 10 40C10 41.6569 11.3431 43 13 43L40 43ZM0.87868 5.12132L37.8787 42.1213L42.1213 37.8787L5.12132 0.87868L0.87868 5.12132Z"
                fill="#FDD034"
              />
            </svg>
          </span>
          <span className="block md:hidden text-theme">
            <svg
              width="20"
              height="20"
              viewBox="0 0 43 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.12132 0.87868C3.94975 -0.292893 2.05025 -0.292893 0.87868 0.87868C-0.292893 2.05025 -0.292893 3.94975 0.87868 5.12132L5.12132 0.87868ZM40 43C41.6568 43 43 41.6568 43 40L43 13C43 11.3431 41.6569 10 40 10C38.3431 10 37 11.3431 37 13V37H13C11.3431 37 10 38.3431 10 40C10 41.6569 11.3431 43 13 43L40 43ZM0.87868 5.12132L37.8787 42.1213L42.1213 37.8787L5.12132 0.87868L0.87868 5.12132Z"
                fill="#FDD034"
              />
            </svg>
          </span>
          <div className="text font-semibold">
            <p className="text-white flex gap-10" ref={textRef}>
              <span className="pr-2">YOUR - </span>
              <span>CREATIVE - </span>
              <span>PARTNER - </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingText;
