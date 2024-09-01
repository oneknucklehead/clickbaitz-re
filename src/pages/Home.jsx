import { NavigationMenuDemo } from "@/components/custom/Navigation";
import { CarouselDemo } from "@/components/demo/Carouseldemo";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" bg-[#0d0d0d] px-10">
      <div className="w-full flex items-center gap-12 py-4">
        <Link to={"/"}>
          <img src={logo} className="h-[35px]" alt="Clickbaitz Logo" />
        </Link>
        <NavigationMenuDemo></NavigationMenuDemo>
      </div>
    </div>
  );
};

export default Home;
