import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import faqData from "@/data/FAQdata";

const FAQSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(faqData[0]);
  const [activeAccordionId, setActiveAccordionId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordionId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen flex justify-center items-center max-w-screen-2xl mx-auto text-white p-5">
      <div className="grid lg:grid-cols-2 gap-8 px-2 sm:px-4 xl:px-8 w-full">
        {/* Accordion for small screens */}
        <div className="block lg:hidden w-full">
          <h1 className="text-4xl lg:text-5xl font-semibold text-theme">
            Frequent questions
          </h1>
          <h3 className="text-3xl lg:text-4xl text-white font-light my-4">
            with specific answers
          </h3>
          {faqData.map((faq) => (
            <div key={faq.id} className="border-b border-theme">
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full text-left py-4 flex justify-between items-center text-theme font-medium"
              >
                <span className="text-sm sm:text-base">{`${faq.id}. ${faq.question}`}</span>
                <span>{activeAccordionId === faq.id ? "−" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {activeAccordionId === faq.id && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden text-white px-2 pb-4 text-sm"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <Link
            to={"/call"}
            className="hover:opacity-90 mt-6 w-fit bg-theme text-black font-semibold flex gap-2 items-center py-2 px-4 rounded-lg"
          >
            <p className="text-sm md:text-base">Book a call</p>
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
          </Link>
        </div>

        {/* Existing layout for larger screens */}
        <div className="hidden lg:block col-span-1">
          <h1 className="text-4xl lg:text-5xl font-semibold text-theme">
            Frequent questions
          </h1>
          <h3 className="text-3xl lg:text-4xl text-white font-light my-4">
            with specific answers
          </h3>
          <ul>
            {faqData.map((faq) => (
              <li
                key={faq.id}
                className={`cursor-pointer py-3 lg:py-4 border-b-2 border-theme transition-all duration-300 ${
                  selectedQuestion.id === faq.id
                    ? "pl-2 lg:pl-4 opacity-100"
                    : "opacity-50"
                }`}
                onClick={() => setSelectedQuestion(faq)}
              >
                <span className="text-sm lg:text-lg text-theme text-wrap">{`${faq.id}. ${faq.question}`}</span>
              </li>
            ))}
          </ul>

          <Link
            to={"/call"}
            className="hover:opacity-90 w-fit bg-theme my-8 text-black font-semibold flex gap-2 items-center py-2 px-4 rounded-lg"
          >
            <p className="text-sm md:text-base">Book a call</p>
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
          </Link>
        </div>

        <div className="hidden lg:flex col-span-1 text-black flex-col">
          {faqData.map(
            (faq) =>
              faq.id === selectedQuestion.id && (
                <motion.div
                  key={faq.id}
                  className="flex-1 p-4 xl:p-8 bg-theme rounded-lg shadow-md mb-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    transition: { duration: 0.5 },
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: { duration: 0.5 },
                  }}
                >
                  <h3 className="text-2xl lg:text-4xl font-light">{faq.id}.</h3>
                  <h2 className="text-3xl lg:text-4xl font-semibold py-4 md:py-8 pl-4">
                    {faq.question}
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
