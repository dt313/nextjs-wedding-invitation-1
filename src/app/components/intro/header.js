import classNames from "classnames/bind";
import styles from "./intro.module.scss";
import { BsFillBookmarkFill } from "react-icons/bs";

const cx = classNames.bind(styles);

function Header({ style, icon = BsFillBookmarkFill, className }) {
  const Icon = icon;

  return (
    <div className={cx("header")} style={style}>
      <span className={cx("line")}></span>
      <span className={cx("icon-box")}>
        <Icon className={cx("hearder-icon", [className])} />
      </span>
      <span className={cx("line")}></span>
    </div>
  );
}

export default Header;
