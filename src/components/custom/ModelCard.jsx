import React from "react";
import { useModelStore } from "./store";

const ModelCard = ({ gradient, children, id, activate }) => {
  const inViewModel = useModelStore((state) => state.inViewModel);
  return (
    <div
      className={`absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br ${gradient} transition-all
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
      gradient={"from-[#f5fbff] to-[#addeff]"}
    >
      <span />
    </ModelCard>
  );
};

const Availability = ({ id, activate }) => {
  return (
    <ModelCard
      id={id}
      activate={activate}
      gradient={"from-[#f5fff7] to-[#adf8ff]"}
    >
      <span />
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
      <span />
    </ModelCard>
  );
};

const SchedulingLinks = ({ id, activate }) => {
  return (
    <ModelCard
      id={id}
      activate={activate}
      gradient={"from-[#fff7f5] to-[#ffd8ad]"}
    >
      <span />
    </ModelCard>
  );
};

const Team = ({ id, activate }) => {
  return (
    <ModelCard
      id={id}
      activate={activate}
      gradient={"from-[#fef5ff] to-[#ffade1]"}
    >
      <span />
    </ModelCard>
  );
};
export default ModelCard;
export { Colors, Music, Team, SchedulingLinks, Availability };
