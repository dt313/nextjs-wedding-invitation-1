import classNames from "classnames/bind";
import styles from "./timer.module.scss";
import { FaCalendar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { google } from "calendar-link";
import Birds from "~/app/static/birds";
const cx = classNames.bind(styles);
function Timer() {
  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    isWeddingDay: false,
  });

  const wedding = {
    year: 2024,
    day: 23,
    month: 3,
  };

  const currentTime = new Date();

  const isItWedding =
    currentTime.getDate() === wedding.day &&
    currentTime.getMonth() === wedding.month - 1;

  const currentYear = currentTime.getFullYear();

  const event = {
    title: "Wedding Day",
    description: "Be there!",
    start: new Date(wedding.year, wedding.month - 1, wedding.day),
    duration: [3, "hour"],
  };

  useEffect(() => {
    setInterval(() => {
      const countdown = () => {
        // Getting the Current Date
        const dateAtm = new Date();

        // if the Birthday has passed
        // then set the Birthday countdown for next year
        let weddingDay = new Date(wedding.year, wedding.month - 1, wedding.day);
        if (dateAtm > weddingDay) {
          weddingDay = new Date(
            wedding.year + 1,
            wedding.month - 1,
            wedding.day
          );
        } else if (dateAtm.getFullYear() === weddingDay.getFullYear() + 1) {
          weddingDay = new Date(currentYear, wedding.month - 1, wedding.day);
        }

        // Getitng Current Time
        const currentTime = dateAtm.getTime();
        // Getting Birthdays Time
        const weddingTime = weddingDay.getTime();

        // Time remaining for the Birthday
        const timeRemaining = weddingTime - currentTime;

        let seconds = Math.floor(timeRemaining / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        // Setting States
        setState((prevState) => ({
          ...prevState,
          seconds,
          minutes,
          hours,
          days,
          isItWedding,
        }));
        // console.log(`${days}:${hours}:${minutes}:${seconds} , ${isItBday}`);
      };
      if (!isItWedding) {
        countdown();
      } else {
        setState((prevState) => ({
          ...prevState,
          isWeddingDay: true,
        }));
      }
    }, 1000);
  }, [wedding.month, wedding.day, isItWedding, wedding.month]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const style = {
    transform: isInView ? "none" : "scale(0)",
    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
  };

  return (
    <div className={cx("wrapper")} ref={ref}>
      <div className={cx("box")} style={style}>
        <div className={cx("text-box")}>
          <h3 className={cx("title")}>Counting down</h3>
          <h3 className={cx("title")}>to the Big Day</h3>
          {/* <Birds /> */}

          <p className={cx("description")}>
            The clock was ticking so fast, between thrilling moments that we had
            never felt before. We look forward to welcoming family and friends
            to witness our blessing vows on a happy day.
          </p>
        </div>
        <div className={cx("time-box")}>
          <div className={cx("countdown")}>
            <div className={cx("countdown-box")}>
              {state.days}
              <span className={cx("legend")}>Days</span>
            </div>
            <div className={cx("countdown-box")}>
              {state.hours}
              <span className={cx("legend")}>Hours</span>
            </div>
            <div className={cx("countdown-box")}>
              {state.minutes}
              <span className={cx("legend")}>Minutes</span>
            </div>
            <div className={cx("countdown-box")}>
              {state.seconds}
              <span className={cx("legend")}>Seconds</span>
            </div>
          </div>
          <motion.a
            className={cx("btn")}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.9,
            }}
            href={google(event)}
            target="_blank"
          >
            {" "}
            <FaCalendar className={cx("icon")} />
            Thêm vào lịch
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Timer;
