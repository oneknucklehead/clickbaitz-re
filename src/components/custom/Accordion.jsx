import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-white/10 overflow-hidden">
      <button
        className={`w-full flex items-center text-theme justify-between p-4 text-left text-lg font-medium ${
          isOpen ? "bg-[#201f1f]" : "bg-none"
        } hover:bg-[#201f1f] transition`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <motion.span
          animate={{ rotate: isOpen ? 90 : 45 }} // Rotate arrow when active
          transition={{ duration: 0.2 }}
          className="bg-white/5 p-3 rounded-full"
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
              fill="#FDD034"
            />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto", opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-4 overflow-hidden"
          >
            <div className="py-2 text-sm text-white">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <AccordionItem key={idx} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
