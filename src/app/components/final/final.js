import classNames from "classnames/bind";
import styles from "./final.module.scss";
import { useRef } from "react";
import { useInView } from "framer-motion";
import images, { wedding } from "~/app/static/images";

const cx = classNames.bind(styles);
function Final() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const style = {
    transform: isInView ? "none" : "scale(0)",
    transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("title")}>THANK YOU</h3>

      <div className={cx("img-box")}>
        <img
          ref={ref}
          style={style}
          className={cx("img")}
          src={wedding.gray5}
        />
      </div>

      <span className={cx("final-text")}>
        Hẹn gặp bạn vào ngày quan trọng của chúng tôi
      </span>
      <h2 className={cx("name")}>Hằng và Quảng</h2>
    </div>
  );
}

export default Final;
