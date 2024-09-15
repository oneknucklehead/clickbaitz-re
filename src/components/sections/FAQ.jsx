import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FAQSection = () => {
  // Define FAQ questions and answers
  const faqData = [
    {
      id: "01",
      question: "We need results immediately how do you deliver?",
      answer:
        "We have a history of making big things happen for the ecommerce brands that we work with and we know how to translate that historical success to work hard for your brand as well. We have the tools and the skills to help take your brand to the next level. The success of your ecommerce brand is our top priority. We use innovative campaign crafting and design techniques to make superior content that drives sales for your brand. ",
    },
    {
      id: "02",
      question: "What is your pricing structure?",
      answer:
        "Our pricing structure is based on the scope of work and the specific needs of your business. We offer flexible pricing to accommodate various business sizes and goals.",
    },
    {
      id: "03",
      question: "Can you deliver for our design needs?",
      answer:
        "Absolutely! We have a talented design team that specializes in creating bespoke, high-converting designs for all business types.",
    },
    {
      id: "04",
      question: "Do you have experience with my industry?",
      answer:
        "Yes, we have worked with clients from a wide range of industries and bring that experience to every new project we undertake.",
    },
    {
      id: "05",
      question: "Will your team take care of everything?",
      answer:
        "Our team can handle everything from strategy to execution. We’ll work with you closely to ensure every aspect of the project meets your expectations.",
    },
  ];

  // Set state to track the selected question
  const [selectedQuestion, setSelectedQuestion] = useState(faqData[0]);

  return (
    <div className="text-white p-8">
      <div className="grid lg:grid-cols-2 gap-8 p-8">
        {/* Left hand side: FAQ Questions */}
        <div className="col-span-1">
          <h1 className="text-6xl font-semibold text-theme">
            Frequent questions
          </h1>
          <h3 className="text-4xl text-white font-light my-4">
            with specific answers
          </h3>
          <ul>
            {faqData.map((faq) => (
              <li
                key={faq.id}
                className={`cursor-pointer py-4 border-b border-theme transition-all duration-300 ${
                  selectedQuestion.id === faq.id
                    ? "border-b-2 border-theme pl-4 opacity-100"
                    : "opacity-50"
                }`}
                onClick={() => setSelectedQuestion(faq)}
              >
                <span className="text-xl text-theme">{`${faq.id}. ${faq.question}`}</span>
              </li>
            ))}
          </ul>
          {/* Optional Call to Action */}
          <Link
            to={"/call"}
            className="hover:opacity-90 w-fit bg-theme my-8 text-black font-semibold flex gap-2 items-center py-2 px-4 rounded-lg"
          >
            <p>Book a call</p>
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
          </Link>
        </div>

        {/* Right hand side: Selected Question and Answer */}
        <div className="col-span-1  text-black flex flex-col">
          {faqData.map(
            (faq) =>
              faq.id === selectedQuestion.id && (
                <motion.div
                  key={faq.id}
                  className="flex-1 p-8 bg-theme rounded-lg shadow-md mb-4"
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
                  <h3 className="text-4xl font-light">{faq.id}.</h3>
                  <h2 className="text-4xl font-semibold py-8 pl-4">{` ${faq.question}`}</h2>
                  <p className=" leading-relaxed">{faq.answer}</p>
                </motion.div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
