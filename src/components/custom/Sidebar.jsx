import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

export function DrawerComponent() {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleMenu = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const menuItems = [
    { name: "Case Studies" },
    { name: "Services" },
    {
      name: "About",
      subOptions: ["Our Ecosystem", "Our Thesis", "Darkmatter"],
    },
    {
      name: "Careers",
      subOptions: ["Option 1", "Option 2"],
    },
    {
      name: "Education",
      subOptions: ["Option 1", "Option 2", "Option 3"],
    },
    { name: "Pricing" },
  ];

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="bg-white/5 p-4 h-full rounded-sm">
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 12H17C17.2833 12 17.5207 11.904 17.712 11.712C17.904 11.5207 18 11.2833 18 11C18 10.7167 17.904 10.4793 17.712 10.288C17.5207 10.096 17.2833 10 17 10H13C12.7167 10 12.479 10.096 12.287 10.288C12.0957 10.4793 12 10.7167 12 11C12 11.2833 12.0957 11.5207 12.287 11.712C12.479 11.904 12.7167 12 13 12ZM1 2H17C17.2833 2 17.5207 1.90433 17.712 1.713C17.904 1.521 18 1.28333 18 1C18 0.716667 17.904 0.479 17.712 0.287C17.5207 0.0956668 17.2833 0 17 0H1C0.716667 0 0.479333 0.0956668 0.288 0.287C0.0960001 0.479 0 0.716667 0 1C0 1.28333 0.0960001 1.521 0.288 1.713C0.479333 1.90433 0.716667 2 1 2ZM7 7H17C17.2833 7 17.5207 6.904 17.712 6.712C17.904 6.52067 18 6.28333 18 6C18 5.71667 17.904 5.479 17.712 5.287C17.5207 5.09567 17.2833 5 17 5H7C6.71667 5 6.479 5.09567 6.287 5.287C6.09567 5.479 6 5.71667 6 6C6 6.28333 6.09567 6.52067 6.287 6.712C6.479 6.904 6.71667 7 7 7Z"
              fill="white"
            />
          </svg>
        </button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerFooter>
            <h1 className="text-4xl font-semibold">
              <Link to={"/"}>
                <img src={logo} className="h-[35px]" alt="Clickbaitz Logo" />
              </Link>
            </h1>
            <DrawerClose asChild>
              <button className="bg-white/10 rounded-full w-fit p-3">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.6 40L0 34.4L14.4 20L0 5.70001L5.6 0.100006L20 14.5L34.3 0.100006L39.9 5.70001L25.5 20L39.9 34.4L34.3 40L20 25.6L5.6 40Z"
                    fill="#FDD034"
                  />
                </svg>
              </button>
            </DrawerClose>
          </DrawerFooter>

          <div className="bg-[#201f1f] p-4 text-white">
            {menuItems.map((item, index) => (
              <div key={index}>
                <div
                  className="cursor-pointer w-fit transition-all flex items-center gap-2"
                  onClick={() => toggleMenu(index)}
                >
                  <div
                    className={`p-2 text-2xl hover:text-white transition-all duration-300 ${
                      activeIndex === index ? "text-white" : "text-white/50"
                    }`}
                  >
                    {item.name}
                  </div>
                  {item.subOptions && (
                    <div
                      className={`border p-1 rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? "rotate-0"
                          : "rotate-45 border-white/50"
                      }`}
                    >
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.6 40L0 34.4L14.4 20L0 5.70001L5.6 0.100006L20 14.5L34.3 0.100006L39.9 5.70001L25.5 20L39.9 34.4L34.3 40L20 25.6L5.6 40Z"
                          fill={`${
                            activeIndex === index ? "white" : "#ffffff80"
                          }
                            `}
                        />
                      </svg>
                    </div>
                  )}
                </div>
                {activeIndex === index && item.subOptions && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="pl-4 space-y-2">
                      {item.subOptions.map((subOption, subIndex) => (
                        <li
                          key={subIndex}
                          className=" cursor-pointer w-fit text-white transition-all duration-300 hover:text-yellow-300"
                        >
                          {subOption}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
