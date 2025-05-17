import React from "react";
import { Link } from "react-router-dom";
import { NavigationMenuComponent } from "./Navigation";
import { DrawerComponent } from "./Sidebar";
import logo from "../../assets/logo.png";
import Container from "./Container";

// const Navbar = React.forwardRef((props, ref) => {
const Navbar = () => {
  return (
    <div
      // ref={ref}
      className="w-full mx-auto flex items-center justify-between md:justify-start gap-12 py-4 px-4 lg:px-8 bg-[#0d0d0d]
      "
      // fixed top-0 z-50
    >
      <a href={"/"}>
        <img src={logo} className="h-[35px]" alt="Clickbaitz Logo" />
      </a>
      <div className="hidden md:block">
        <NavigationMenuComponent></NavigationMenuComponent>
      </div>
      <div className="block md:hidden">
        <DrawerComponent></DrawerComponent>
      </div>
    </div>
  );
};

Navbar.displayName = "Navbar";

export default Navbar;
