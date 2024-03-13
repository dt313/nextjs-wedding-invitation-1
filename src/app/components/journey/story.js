import classNames from "classnames/bind";
import styles from "./journey.module.scss";
import { useRef } from "react";
import { useInView } from "framer-motion";

const cx = classNames.bind(styles);

function Story({ story }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const style = {
    transform: isInView ? "none" : "translateX(-200px)",
    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
  };
  return (
    <div className={cx("story-item")} ref={ref} style={style}>
      <p className={cx("date")}>
        {story.date}
        <span className={cx("line")}></span>
      </p>
      <p className={cx("content")}>{story.content}</p>
    </div>
  );
}

export default Story;
