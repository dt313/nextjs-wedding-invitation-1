import classNames from "classnames/bind";
import styles from "./firstPage.module.scss";
import Header from "../intro/header";
import { useInView } from "framer-motion";
import { useRef } from "react";
import images, { wedding } from "~/app/static/images";
import { IoMdHeart } from "react-icons/io";
const cx = classNames.bind(styles);

function FirstPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  let style = {
    transform: isInView ? "none" : "scale(0)",
    transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  let headerStyle = {
    transform: isInView ? "none" : "translateY(-200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
  };

  let styleLeft = {
    transform: isInView ? "none" : "translate(-200px, -200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
  };

  let styleRight = {
    transform: isInView ? "none" : "translate(200px, -200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
  };

  return (
    <div className={cx("wrapper")} ref={ref}>
      <div className={cx("box")} style={style}>
        <div className={cx("img-box")}>
          <img
            style={styleLeft}
            className={cx("side", "side-left")}
            src={images.f1.default.src}
          />
          <img className={cx("img")} src={wedding.black1} alt="wedding" />
          <img
            style={styleRight}
            className={cx("side", "side-right")}
            src={images.f2.default.src}
          />
        </div>
        <div className={cx("text-box")}>
          <h3 className={cx("title")}>THE PROMISE</h3>
          <Header style={headerStyle} icon={IoMdHeart} />
          <p className={cx("description")}>
            “Tình cảm ấy, chẳng cần cứ phải hét to lên cho cả thế giới biết, chỉ
            cần thủ thỉ cho một người là cả thế giới của mình nghe là đủ rồi.
            Điều quan trọng nhất là đến cuối đường vẫn còn ở bên nhau, đi cạnh
            nhau, nắm tay nhau, rung động vì nhau. Cứ thế thôi là đủ rồi!”
          </p>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
