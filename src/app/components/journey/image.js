import { useRef } from "react";
import { useInView } from "framer-motion";

function Image({ img }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const style = {
    transform: isInView ? "none" : "scale(0)",
    transition: "transform 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
  };
  return <img src={img} alt="Image" width="100%" ref={ref} style={style} />;
}

export default Image;
