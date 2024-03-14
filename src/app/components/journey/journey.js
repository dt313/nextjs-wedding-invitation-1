import classNames from "classnames/bind";
import styles from "./journey.module.scss";
import Image from "./image";
import Story from "./story";
import Preview from "../preview/preview";
import { useState } from "react";
import images, { wedding } from "~/app/static/images";
const cx = classNames.bind(styles);

const album = [
  {
    imgs: [
      {
        id: 1,
        img: wedding.red1,
      },
      {
        id: 2,
        img: wedding.red2,
      },
    ],
  },

  {
    imgs: [
      {
        id: 3,
        img: wedding.red3,
      },
      {
        id: 4,
        img: wedding.gray1,
      },
    ],
  },
  {
    imgs: [
      {
        id: 5,
        img: wedding.gray2,
      },
      {
        id: 6,
        img: wedding.gray4,
      },
      {
        id: 7,
        img: wedding.gray3,
      },
    ],
  },
  {
    imgs: [
      {
        id: 8,
        img: wedding.gray5,
      },
      {
        id: 9,
        img: wedding.gray6,
      },
    ],
  },
];

const story = [
  {
    date: "9 January 2022",
    content:
      "Chàng và nàng bắt đầu hành trình của họ dưới ánh mắt đắm say và nụ cười ngọt ngào, nhưng chính sự gặp gỡ ấy đã đánh thức tình yêu mãnh liệt trong trái tim, để rồi họ bắt đầu một chương mới với câu chuyện tình yêu không gì tuyệt vời hơn.",
  },
  {
    date: "20 Mar 2024",

    content:
      "Giữa bức tranh tình yêu và hạnh phúc, họ trải nghiệm giây phút trọng đại, khiến trái tim họ đập nhanh hơn và tình cảm của họ trở nên bền vững, hứa hẹn một hành trình đầy ắp niềm vui và sự hiểu biết",
  },
  {
    date: "23(24) Mar 2024",
    content:
      "Họ trao nhau lời hứa vĩnh cửu, kết nối trái tim và linh hồn để bắt đầu một hành trình chung đẹp đẽ, nơi mọi khoảnh khắc trở thành kỷ niệm vĩnh viễn của tình yêu",
  },
];

function Journey() {
  const [isShow, setIsShow] = useState(false);
  const [index, setIndex] = useState(0);
  const handleClosePreview = () => {
    setIsShow(false);
  };
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("title")}>Album</h3>
      <img
        className={cx("wonderland")}
        src={images.wonderland.default.src}
        alt="wonderland"
      />
      {/* <div className={cx("video-block")}>
        <iframe
          className={cx("video")}
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/XHOmBV4js_E"
          title="Video Placeholder"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div> */}

      {/* <Preview data={album} /> */}

      <div className={cx("album")}>
        {album.map((imgs, index) => {
          return (
            <div className={cx("column")} key={index}>
              {imgs.imgs.map((img, index) => {
                return (
                  <div
                    className={cx("img-block")}
                    onClick={() => {
                      setIsShow(true);
                      setIndex(img.id);
                    }}
                  >
                    <Image key={index} img={img.img} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {isShow && (
        <Preview data={album} onClose={handleClosePreview} index={index} />
      )}

      <div className={cx("story")}>
        {story.map((sto, index) => {
          return <Story story={sto} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Journey;
