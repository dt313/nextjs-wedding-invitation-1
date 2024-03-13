import classNames from "classnames/bind";
import styles from "./arrow.module.css";

const cx = classNames.bind(styles);

function Arrow() {
  return (
    <div className={cx("scroll-down")}>
      <span className={cx("arrow-down")}></span>
    </div>
  );
}

export default Arrow;
