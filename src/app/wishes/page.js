"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./wishes.module.scss";
import { api } from "../wedding";
const cx = classNames.bind(styles);

function Wishes({}) {
  const [wishes, setWishes] = useState([]);
  const searchParams = useSearchParams();

  const name = searchParams.get("name");

  useEffect(() => {
    function compareByDate(a, b) {
      return b.createdAt - a.createdAt;
    }

    const data = api.sort(compareByDate);
    setWishes(data);
  }, []);

  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("title")}>ALL WISHES FOR YOUU</h2>
      <div className={cx("container")}>
        {wishes.length > 0 ? (
          wishes.map((w, index) => {
            return (
              <div className={cx("wish")} key={index}>
                <span className={cx("name")}>{w?.name}</span>
                <p className={cx("content")}>{w?.wish}</p>
                <span className={cx("isAttend")}>
                  Tham dự : {w?.isAttend ? "Có" : "Không"}
                </span>
              </div>
            );
          })
        ) : (
          <p className={cx("nodata")}>
            Chúng tôi rất vui nếu nhận được lời chúc từ các bạn
          </p>
        )}
      </div>

      <a href={`/${name}`} className={cx("link")}>
        Go to back
      </a>
    </div>
  );
}

export default Wishes;
