import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { NavigationMenuComponent } from "./Navigation";
import { DrawerComponent } from "./Sidebar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Nav = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-90%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className="fixed  top-0 z-10 flex w-full justify-center"
    >
      <nav
        className={`flex w-full justify-between md:justify-around items-center gap-8 rounded-b-xl bg-[#201f1f] py-3  px-4  *:transition-colors *:duration-300`}
      >
        <div className="flex items-center gap-8">
          <Link to={"/"}>
            <img src={logo} className="h-[25px]" alt="Clickbaitz Logo" />
          </Link>
          <div className="hidden md:block">
            <NavigationMenuComponent></NavigationMenuComponent>
          </div>
        </div>
        <div className="block md:hidden">
          <DrawerComponent></DrawerComponent>
        </div>
        <Link to={"/call"} className="hidden md:block">
          <button
            className=" bg-theme font-semibold
           text-xs text-black py-2 px-4 rounded-sm"
          >
            Book a call
          </button>
        </Link>
      </nav>
      {/* <div
        className={` ${
          isHidden ? "block" : "hidden"
        } absolute bottom-[3px] bg-white/25 h-[3px] rounded-full w-32`}
      ></div> */}
    </motion.div>
  );
};

export default Nav;
