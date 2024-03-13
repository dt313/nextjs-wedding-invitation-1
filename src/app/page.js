"use client";
import classNames from "classnames/bind";
import styles from "./page.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { copyTextToClipboard } from "./hepler/copyTexttoClipboard";
const cx = classNames.bind(styles);

function Main() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (name.trim() === "" && isCopied === true) {
      setError("Vui lòng nhập tên người mà bạn muốn mời ");
    } else {
      const path = `${window.location.href}${encodeURIComponent(name)}`;
      copyTextToClipboard(path);
      setName("");
      setIsCopied(true);
    }
  };

  useEffect(() => {
    let timeout;
    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied]);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <h2 className={cx("title")}>
          Nhập tên bạn của cô dâu hoặc chú rể và copy link gửi cho gửi cho người
          bạn muốn mời
        </h2>
        <input
          className={cx("input")}
          value={name}
          onChange={(e) => {
            setError("");
            setName(e.target.value);
          }}
        />
        {error && <p className={cx("err")}>{error}</p>}
        <motion.button
          className={cx("btn")}
          onClick={handleCopy}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          {isCopied ? "Copied" : "Copy Link"}
        </motion.button>
      </div>
    </div>
  );
}

export default Main;
