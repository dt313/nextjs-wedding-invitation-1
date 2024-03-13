import classNames from "classnames/bind";
import styles from "./gitf.module.scss";
import { ImCreditCard } from "react-icons/im";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { copyTextToClipboard } from "~/app/hepler/copyTexttoClipboard";
import images from "~/app/static/images";
const cx = classNames.bind(styles);

function Card({ name, bank, number }) {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);
  const isInView = useInView(ref, { once: true });

  const style = {
    transform: isInView ? "none" : "scale(0)",
    transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  useEffect(() => {
    let timeout;
    if (copied) {
      timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);
  return (
    <div className={cx("card")} style={style} ref={ref}>
      <span className={cx("card-name")}>{bank}</span>
      <img
        className={cx("card-bow")}
        alt="gift"
        src={images.gift.default.src}
      />
      <span className={cx("card-number")}>{number}</span>
      <span className={cx("card-own")}>{name}</span>
      <button
        className={cx("card-btn")}
        onClick={() => {
          copyTextToClipboard(number);
          setCopied(true);
        }}
      >
        <ImCreditCard className={cx("icon")} />
        {copied ? "Copied" : "Copy Number"}
      </button>
    </div>
  );
}

export default Card;
