import classNames from "classnames/bind";
import styles from "./fouthPage.module.scss";
import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import Analyst from "~/app/components/analyst";
import images from "~/app/static/images";
const cx = classNames.bind(styles);

function FouthPage({ slug }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isWishesTab, setIsWishesTab] = useState(true);
  const [wishes, setWishes] = useState([]);
  const [name, setName] = useState(" ");
  const [wish, setWish] = useState(" ");
  const [isAttend, setIsAttend] = useState(null);
  const [error, setError] = useState(null);
  const style = {
    transform: isInView ? "none" : "translateY(700px)",
    transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  const checkError = ({ name, wish, isAttend }) => {
    if (name.trim() === "") {
      setError("Vui lòng cho chúng tôi biết tên hoặc nickname của bạn !");
      return false;
    }
    if (wish.trim() === "") {
      setError("Vui lòng nhập lời chúc của bạn ! ");
      return false;
    }
    if (isAttend === null) {
      setError("Hãy cho chúng tôi biết bạn có đến tham dự hay không !");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    const isValid = checkError({ name, wish, isAttend });
    if (isValid) {
      var data = { name, wish, isAttend };
      fetch("https://65788350f08799dc80457e4e.mockapi.io/api/v1/wishes", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          setWishes((prev) => [data, ...prev]);
          alert("Cảm ơn vì lời chúc của bạn !");
          setName("");
          setWish("");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  useEffect(() => {
    function compareByDate(a, b) {
      return b.createdAt - a.createdAt;
    }
    fetch("https://65788350f08799dc80457e4e.mockapi.io/api/v1/wishes")
      .then((response) => response.json())
      .then((data) => {
        data.sort(compareByDate);
        setWishes(data);
      });
  }, []);

  return (
    <div className={cx("wrapper")} ref={ref}>
      <div className={cx("container")}>
        <div className={cx("box")} style={style}>
          <div className={cx("left")}>
            <h4 className={cx("title")}>
              <img className={cx("flower")} src={images.flower3.default.src} />
              Send Message
            </h4>
            <img
              className={cx("wonderland")}
              src={images.wonderland.default.src}
              alt="wonderland"
            />
            <p className={cx("description")}>
              Hãy dành những lời chúc cho tốt đẹp nhất cho cô dâu và chú rể
            </p>

            <div className={cx("form")}>
              <div className={cx("input-block")}>
                <span className={cx("lable")}>Tên</span>
                <input
                  type="text"
                  className={cx("input")}
                  placeholder="Nhập tên của bạn"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setError(null);
                  }}
                />
              </div>
              <div className={cx("input-block")}>
                <span className={cx("lable")}>Lời chúc</span>
                <textarea
                  type="text"
                  className={cx("input", "large")}
                  placeholder="Nhập lời chúc của bạn "
                  value={wish}
                  onChange={(e) => {
                    setWish(e.target.value);
                    setError(null);
                  }}
                />
              </div>

              <div className={cx("input-block")}>
                <span className={cx("lable")}>Bạn sẽ đến chứ ?</span>
                <div className={cx("check")}>
                  <input
                    type="radio"
                    name="attend"
                    value="yes"
                    className={cx("radio")}
                    id="yes"
                    onChange={() => {
                      setIsAttend(true);
                      setError(null);
                    }}
                  />
                  <label htmlFor="yes" className={cx("option")}>
                    Có
                  </label>
                </div>
                <div className={cx("check")}>
                  <input
                    id="no"
                    type="radio"
                    name="attend"
                    value="no"
                    className={cx("radio")}
                    onChange={() => {
                      setIsAttend(false);
                      setError(null);
                    }}
                  />
                  <label htmlFor="no" className={cx("option")}>
                    Không
                  </label>
                </div>

                {error && <p className={cx("error")}>{error}</p>}
              </div>

              <motion.button
                className={cx("btn")}
                onClick={handleSubmit}
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >
                Gửi
              </motion.button>
            </div>
          </div>

          <div className={cx("right")}>
            <div className={cx("nav")}>
              <p
                className={cx("item", isWishesTab && "active")}
                onClick={() => setIsWishesTab(true)}
              >
                Lời chúc
              </p>
              <p
                className={cx("item", !isWishesTab && "active")}
                onClick={() => setIsWishesTab(false)}
              >
                Tham dự
              </p>
            </div>
            <div className={cx("body")}>
              {isWishesTab ? (
                <div className={cx("wishes")}>
                  <div className={cx("wishes-container")}>
                    {wishes.length > 0 ? (
                      wishes.map((w, index) => {
                        return (
                          <div className={cx("wish")} key={index}>
                            <span className={cx("wish-name")}>{w.name}</span>
                            <p className={cx("wish-content")}>{w.wish}</p>
                          </div>
                        );
                      })
                    ) : (
                      <p className={cx("error")}>
                        Chúng tôi rất vui nếu nhận được lời chúc từ các bạn
                      </p>
                    )}
                  </div>
                  {wishes.length > 0 && (
                    <a className={cx("see-all")} href={`/wishes?name=${slug}`}>
                      Xem tất cả
                    </a>
                  )}
                </div>
              ) : (
                <div className={cx("analyst")}>
                  <Analyst data={wishes} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FouthPage;
