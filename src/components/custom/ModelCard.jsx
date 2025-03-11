import React from "react";
import { useModelStore } from "./store";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/1.json";
import animationData2 from "../../assets/lotties/2.gif";
import animationData3 from "../../assets/lotties/3.json";
import animationData4 from "../../assets/lotties/4.json";

const ModelCard = ({ gradient, children, id, activate }) => {
  const inViewModel = useModelStore((state) => state.inViewModel);
  return (
    <div
      className={`absolute p-8 flex items-center justify-center inset-0 h-full w-full rounded-2xl bg-gradient-to-br ${gradient} transition-all
      ${activate && (inViewModel === id ? "opacity-100" : "opacity-0")}
      `}
    >
      {children}
    </div>
  );
};

const Colors = ({ id, activate }) => {
  return (
    <ModelCard
      id={id}
      activate={activate}
      gradient={"from-[#ffffff] to-[#ffffff]"}
    >
      <div>
        <img src={animationData2} alt="loading..." />
      </div>
    </ModelCard>
  );
};

const Availability = ({ id, activate }) => {
  return (
    <ModelCard
      id={id}
      activate={activate}
      gradient={"from-[#f3ebe9] to-[#f3ebe9]"}
    >
      <div className="rounded-2xl">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      </div>
    </ModelCard>
  );
};

const Music = ({ id, activate }) => {
  return (
    <ModelCard
      id={id}
      activate={activate}
      gradient={"from-[#f7fff5] to-[#adffd8]"}
    >
      <div>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData4,
            // rendererSettings: {
            //     preserveAspectRatio: 'xMidYMid slice'
            // }
          }}
        />
      </div>
    </ModelCard>
  );
};

const SchedulingLinks = ({ id, activate }) => {
  return (
    <ModelCard
      id={id}
      activate={activate}
      gradient={"from-[#ffffff] to-[#ffffff]"}
    >
      <div>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData3,
            // rendererSettings: {
            //     preserveAspectRatio: 'xMidYMid slice'
            // }
          }}
        />
      </div>
    </ModelCard>
  );
};

export default ModelCard;
export { Colors, Music, SchedulingLinks, Availability };
