import React from "react";
import { Link } from "react-router-dom";
import { NavigationMenuComponent } from "./Navigation";
import { DrawerComponent } from "./Sidebar";
import logo from "../../assets/logo.png";

const Navbar = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-full flex items-center gap-12 py-4 px-8 bg-[#0d0d0d]
      "
      // fixed top-0 z-50
    >
      <Link to={"/"}>
        <img src={logo} className="h-[35px]" alt="Clickbaitz Logo" />
      </Link>
      <NavigationMenuComponent></NavigationMenuComponent>
      <DrawerComponent></DrawerComponent>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
