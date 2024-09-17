import { NavigationMenuComponent } from "@/components/custom/Navigation";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CarouselHome from "@/components/custom/CarouselHome";
import { DrawerComponent } from "@/components/custom/Sidebar";
import Navbar from "@/components/custom/Navbar";
import ScrollSection from "@/components/sections/Scroll";
import FAQSection from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

const Home = () => {
  const [navbarHeight, setNavbarHeight] = useState(80);
  const navbarRef = useRef(null);

  useLayoutEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.clientHeight); // Set the navbar height dynamically
    }
    console.log("navbar heingt:" + navbarHeight);
  }, []);

  return (
    <div className="bg-[#0d0d0d]">
      {/* <div ref={navbarRef}>
        <div className="w-full flex items-center gap-12 py-4 px-20 bg-[#0d0d0d] fixed top-0 z-50 h-fit">
          <Link to={"/"}>
            <img src={logo} className="h-[35px]" alt="Clickbaitz Logo" />
          </Link>
          <NavigationMenuComponent></NavigationMenuComponent>
          <DrawerComponent></DrawerComponent>
        </div>
      </div> */}
      <Navbar ref={navbarRef} />
      <div className="">
        <CarouselHome navbarHeight={navbarHeight}></CarouselHome>
      </div>
      <ScrollSection />
      <FAQSection />
      <Footer></Footer>
    </div>
  );
};

export default Home;
