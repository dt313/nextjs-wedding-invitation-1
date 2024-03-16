import classNames from "classnames/bind";
import styles from "./thirstPage.module.scss";
import AddressModel from "../addressmodel";
import { useRef } from "react";
import { useInView } from "framer-motion";
const cx = classNames.bind(styles);

function ThirstPage() {
  const weddingInfo = [
    {
      img: "https://hi.possiblewedding.com/wp-content/uploads/2023/01/wedding-ring-1-1.png",
      title: "Nhà trai",
      date: "Ngày 23, 24 tháng 3 năm 2024",
      time: "4h chiều (ngày 23)",
      time2: "8h sáng (ngày 24) ",
      address: "Đội 6, An Xá , Quốc Tuấn, Nam Sách, Hải Dương",
      street: "28FV+G7F Nam Sách, Hải Dương, Việt Nam",
      phone: "0961 664 497",
    },

    {
      img: "https://hi.possiblewedding.com/wp-content/uploads/2023/01/wedding-arch-1-1-1.png",
      title: "Nhà gái",
      date: "Ngày 23, 24 tháng 3 năm 2024",
      time: "4h chiều (ngày 23)",
      time2: "8h sáng (ngày 24) ",
      address: "Xóm 13 , An Đông , An Bình , Nam Sách , Hải Dương",
      street: "29G6+F4F Nam Sách, Hải Dương, Việt Nam",
      phone: "0982 815 847",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const style = {
    transform: isInView ? "none" : "translateY(700px)",
    transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  return (
    <div className={cx("wrapper")} ref={ref}>
      <div className={cx("box")} style={style}>
        <h3 className={cx("title")}>Đám cưới sẽ được tổ chức vào :</h3>

        <div className={cx("des-box")}>
          <p className={cx("des")}>
            Dự lễ ăn hỏi: 14h chiều ngày 23 tháng 3 năm 2024
          </p>
          <p className={cx("des")}>
            Dự lễ thành hôn: 11h trưa ngày 24 tháng 3 năm 2024
          </p>
        </div>

        <div className={cx("addresses")}>
          {weddingInfo.map((info, index) => (
            <AddressModel
              key={index}
              img={info.img}
              title={info.title}
              date={info.date}
              time={info.time}
              time2={info.time2}
              address={info.address}
              street={info.street}
              phone={info.phone}
            />
          ))}
        </div>

        <p className={cx("footer-text")}>
          Chúng tôi rất vui với sự tham dự của bạn
        </p>
      </div>
    </div>
  );
}

export default ThirstPage;
