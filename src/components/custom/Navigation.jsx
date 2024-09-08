"use client";

import * as React from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import caseStudyItems from "@/data/caseStudyItemsList";
import { aboutItems, aboutMainItem } from "@/data/aboutItems";

export function NavigationMenuComponent() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <Link to="/model" legacyBehavior passHref>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Our Model
            </NavigationMenuLink>
          </NavigationMenuItem>
        </Link>
        <NavigationMenuItem>
          <Link to={"/about"}>
            <NavigationMenuTrigger className="">About Us</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                {aboutMainItem.map((item, index) => (
                  <NavigationMenuLink key={index} asChild>
                    <a
                      className="group flex gap-5 h-full w-full select-none flex-col justify-end rounded-md p-4 no-underline outline-none focus:shadow-md"
                      href={item.href}
                    >
                      <p className="text-xs leading-tight text-white/50">
                        {item.description}
                      </p>
                      <div className="w-full h-full flex items-center justify-center ">
                        <img
                          src={item.gifLink}
                          alt="About Image"
                          className="aspect-video"
                        />
                      </div>
                      {/* <Icons.logo className="h-6 w-6" /> */}
                      <div className="flex gap-1 items-center mb-2 text-xs font-medium">
                        <p>{item.title}</p>
                        <span className="border p-[2px] py-[3px] rounded-full group-hover:translate-x-1 transition duration-300">
                          <svg
                            width="10"
                            height="7"
                            viewBox="0 0 19 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928932C11.9526 0.538408 11.3195 0.538408 10.9289 0.928932C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM0 9H18V7H0V9Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </div>
                    </a>
                  </NavigationMenuLink>
                ))}
              </li>
              {aboutItems.map((item, index) => (
                <ListItem key={index} href={item.href} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to={"/casestudies"}>
            <NavigationMenuTrigger>Case Studies</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {caseStudyItems.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-[#ffffff]/10 hover:text-white focus:bg-[#ffffff]/5 focus:text-white duration-300 ",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-xs leading-snug text-[#ffffff]/50">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
