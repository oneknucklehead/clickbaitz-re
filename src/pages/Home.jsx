import { useLayoutEffect, useRef, useState } from "react";
import CarouselHome from "@/components/custom/CarouselHome";
import Navbar from "@/components/custom/Navbar";
import ScrollSection from "@/components/sections/Scroll";
import FAQSection from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import Nav from "@/components/custom/Navbar";

const Home = () => {
  const [navbarHeight, setNavbarHeight] = useState(72);
  const navbarRef = useRef(null);

  useLayoutEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.clientHeight); // Set the navbar height dynamically
    }
  }, []);

  return (
    <div className="bg-[#0d0d0d]">
      {/* <Navbar ref={navbarRef} /> */}
      <Nav />
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
