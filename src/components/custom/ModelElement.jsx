import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useModelStore } from "./store";

const ModelElement = ({ children, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  //   console.log(isInView, children);
  const setInViewModel = useModelStore((state) => state.setInViewModel);
  const inViewModel = useModelStore((state) => state.inViewModel);

  useEffect(() => {
    if (isInView) setInViewModel(id);
    if (!isInView && inViewModel === id) setInViewModel(null);
  }, [isInView, id, setInViewModel, inViewModel]);
  return (
    <div
      ref={ref}
      className={`py-16 transition-all ${
        isInView ? "opacity-100" : "opacity-10"
      }`}
    >
      {children}
    </div>
  );
};

export default ModelElement;
