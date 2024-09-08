import React from "react";
import MarqueeItem from "./MarqueeItem";
import marqueeItems from "@/data/Marquee";
const Marquee = () => {
  return (
    <div className="container mx-auto">
      <MarqueeItem texts={marqueeItems} from={0} to={"-100%"} />
    </div>
  );
};

export default Marquee;
