import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import caseStudies from "@/data/homeCaseStudy";

export function SliderCaseStudy() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-xs"
    >
      <CarouselContent>
        {caseStudies.map(({ description, title, link }, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-theme mb-2">
                <CardContent className="flex gap-2 flex-col p-6">
                  <p className="text-2xl font-semibold">{title}</p>
                  <p>{description}</p>
                </CardContent>
              </Card>

              <div className="flex w-full items-center gap-4">
                {/* <div className="text-lg bg-white rounded-md py-2 px-4"> */}
                <Card className=" w-full text-center py-2 px-4">
                  View full study
                </Card>
                {/* </div> */}
                <Link to={link} className="bg-white rounded-full p-4">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 12C11.5523 12 12 11.5523 12 11L12 2C12 1.44772 11.5523 1 11 1C10.4477 1 10 1.44772 10 2L10 10H2C1.44772 10 1 10.4477 1 11C1 11.5523 1.44772 12 2 12L11 12ZM0.292893 1.70711L10.2929 11.7071L11.7071 10.2929L1.70711 0.292893L0.292893 1.70711Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}