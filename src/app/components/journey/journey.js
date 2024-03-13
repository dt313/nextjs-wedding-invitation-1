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
        img: wedding.red8,
      },

      {
        id: 3,
        img: wedding.red4,
      },

      {
        id: 4,
        img: wedding.red6,
      },
      {
        id: 5,
        img: wedding.red7,
      },
    ],
  },
  {
    imgs: [
      {
        id: 6,
        img: wedding.gray13,
      },
      {
        id: 7,
        img: wedding.gray3,
      },
      {
        id: 8,
        img: wedding.red3,
      },

      {
        id: 9,
        img: wedding.red9,
      },
    ],
  },
  {
    imgs: [
      {
        id: 10,
        img: wedding.gray12,
      },

      {
        id: 11,
        img: wedding.gray5,
      },
      {
        id: 12,
        img: wedding.gray8,
      },
      {
        id: 13,
        img: wedding.gray9,
      },
      {
        id: 14,
        img: wedding.gray10,
      },
    ],
  },
  {
    imgs: [
      {
        id: 15,
        img: wedding.gray6,
      },
      {
        id: 16,
        img: wedding.gray11,
      },
      {
        id: 17,
        img: wedding.gray7,
      },

      {
        id: 18,
        img: wedding.gray14,
      },
      {
        id: 19,
        img: wedding.gray15,
      },
    ],
  },
  {
    imgs: [
      {
        id: 20,
        img: wedding.black2,
      },
      {
        id: 21,
        img: wedding.black1,
      },

      {
        id: 22,
        img: wedding.black3,
      },
      {
        id: 23,
        img: wedding.black4,
      },
    ],
  },
  {
    imgs: [
      {
        id: 24,
        img: wedding.black5,
      },
      {
        id: 25,
        img: wedding.black6,
      },
      {
        id: 26,
        img: wedding.black7,
      },
      {
        id: 27,
        img: wedding.black8,
      },
    ],
  },
];

const story = [
  {
    date: "30 May 2019",
    content:
      "Chàng và nàng bắt đầu hành trình của họ dưới ánh mắt đắm say và nụ cười ngọt ngào, nhưng chính sự gặp gỡ ấy đã đánh thức tình yêu mãnh liệt trong trái tim, để rồi họ bắt đầu một chương mới với câu chuyện tình yêu không gì tuyệt vời hơn.",
  },
  {
    date: "28 Dec 2023",

    content:
      "Giữa bức tranh tình yêu và hạnh phúc, họ trải nghiệm giây phút trọng đại, khiến trái tim họ đập nhanh hơn và tình cảm của họ trở nên bền vững, hứa hẹn một hành trình đầy ắp niềm vui và sự hiểu biết",
  },
  {
    date: "30(31) Dec 2023",
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
