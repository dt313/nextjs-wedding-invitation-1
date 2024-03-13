"use client";
import classNames from "classnames/bind";
import styles from "./invitation.module.scss";
import IntroPage from "~/app/components/intro";
import FirstPage from "~/app/components/firstpage";
import SecondPage from "~/app/components/secondpage";
import ThirstPage from "~/app/components/thirstpage";
import FouthPage from "~/app/components/fouthgage";
import Timer from "~/app/components/timer";
import Gift from "../gift/gift";
import Journey from "../journey";
import Final from "../final";
import Footer from "../footer";
import { ImMusic } from "react-icons/im";
import sound from "~/app/static/sound.mp3";
import { useEffect, useRef, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { wedding } from "~/app/static/images";
import Confetti from "react-confetti";
const cx = classNames.bind(styles);
function Invitation({ name }) {
  const [isOpenMusic, setIsOpenMusic] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, []);

  const ref = useRef(null);

  const handleOpenAudio = () => {
    if (isOpenMusic === false) {
      setIsOpenMusic(true);
      ref.current.play();
    } else {
      setIsOpenMusic(false);
      ref.current.pause();
    }
  };

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsOpenMusic(true);
    if (isOpen === false) {
      setIsOpen(true);
      ref.current.play();
    }
  };

  useEffect(() => {
    if (isOpen == true) {
      let pageHeight = window.innerHeight;
      scroll.scrollTo(pageHeight);
    }
  }, [isOpen]);

  return (
    <div className={cx("wrapper")}>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={300}
        recycle={false}
        gravity={0.03}
      />
      <div className={cx("music")} onClick={handleOpenAudio}>
        <ImMusic className={cx("icon", isOpenMusic && "rotate")} />
        <audio ref={ref} src={sound} hidden />
      </div>
      <IntroPage handleOpen={handleOpenInvitation} name={name} />
      {isOpen && (
        <>
          <FirstPage />
          <SecondPage />
          <div className={cx("img-box")}>
            <img className={cx("img")} src={wedding.red8}></img>
          </div>
          <ThirstPage />
          <FouthPage slug={name} />
          <Timer />
          <Gift />
          <Journey />
          <Final />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Invitation;
