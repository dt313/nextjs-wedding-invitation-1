"use client";
import { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./intro.module.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { motion, useInView } from "framer-motion";
import Header from "./header";
// import Arrow from "~/app/components/arrow";
import images, { wedding } from "~/app/static/images";
const cx = classNames.bind(styles);
function IntroPage({ handleOpen, name = "You" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  let style = {
    transform: isInView ? "none" : "scale(0)",
    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
  };

  return (
    <div className={cx("wrapper")} ref={ref}>
      <div
        className={cx("block-wrapper")}
        style={{
          transform: isInView ? "none" : "translateY(500px); opacity: 0",
          opacity: isInView ? 1 : 0,
          transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        <div className={cx("block")}>
          <div className={cx("left")}>
            <img
              className={cx("wonderland")}
              src={images.wonderland.default.src}
              alt="Wonderland"
            />

            <div className={cx("img-box")}>
              <img className={cx("img")} src={wedding.gray3} />
            </div>
          </div>
          <div className={cx("right")}>
            <div className={cx("text-box")}>
              <p className={cx("date")}>Ngày 23 & 24, Tháng 3 năm 2024 </p>
              <div className={cx("name-box")}>
                <h3 className={cx("name")} style={{ marginTop: "-40px" }}>
                  Q
                </h3>
                <span className={cx("and")}></span>
                <h3 className={cx("name")} style={{ marginTop: "40px" }}>
                  H
                </h3>
              </div>

              <div className={cx("dear-box")}>
                <p className={cx("dear")}>Dear. </p>
                <span className={cx("dear-name")}>{name}</span>
              </div>
            </div>
            {/* 
            <img
              src={images.ring.default.src}
              alt="ring"
              className={cx("ring")}
            /> */}

            {/* <Arrow /> */}

            <motion.button
              className={cx("btn")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleOpen}
            >
              <span className={cx("heart-icon")}>
                <AiOutlineHeart className={cx("icon")} />
              </span>
              Mở thiệp
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
