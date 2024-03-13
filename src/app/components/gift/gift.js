import classNames from "classnames/bind";
import styles from "./gitf.module.scss";
import { FaGift } from "react-icons/fa";
import { useState } from "react";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Card from "./card";
import images from "~/app/static/images";

const cx = classNames.bind(styles);
function Gift() {
  const [isShowCard, setIsShowCard] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  let style = {
    transform: isInView ? "none" : "scale(0)",
    transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
  };

  return (
    <div className={cx("wrapper")} ref={ref}>
      <h3 className={cx("title")}>GIFT</h3>
      <img
        className={cx("wonderland")}
        src={images.wonderland.default.src}
        alt="wonderland"
      />
      <p className={cx("description")} style={style}>
        Dành cho gia đình (bạn bè) muốn gửi quà. Chúng tôi sẽ rất vui khi nhận
        được nó. Nhấn vào nút bên dưới để gửi chúng cho chúng tôi:
      </p>
      <button
        className={cx("btn")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsShowCard(!isShowCard)}
        style={style}
      >
        <FaGift className={cx("icon")} />
        Tặng quà
      </button>
      {isShowCard && (
        <div className={cx("card-box")}>
          <Card
            name="Lê Thị Thu Hằng"
            number="0341007087286"
            bank="VietcomBank"
          />
          <Card
            name="Lê Đình Quảng"
            number="0341007131727"
            bank="VietcomBank"
          />
        </div>
      )}
    </div>
  );
}

export default Gift;
