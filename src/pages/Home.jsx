import { CarouselDemo } from "@/components/demo/Carouseldemo";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        <p className="underline text-3xl font-bold">Hello from tailwind</p>
      </div>
      <Button>hello from Shad</Button>
      <div className="flex justify-center">
        <CarouselDemo></CarouselDemo>
      </div>
    </div>
  );
};

export default Home;
