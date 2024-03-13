import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import classNames from "classnames/bind";
import styles from "./analyst.module.scss";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);
function Analyst({ data }) {
  const [no, setNo] = useState(0);
  const [yes, setYes] = useState(0);

  useEffect(() => {
    const getData = (data) => {
      console.log(data);
      const attend = data.filter((a) => a.isAttend === true);
      const notAttend = data.filter((a) => a.isAttend === false);

      setYes(attend.length);
      setNo(notAttend.length);
    };

    getData(data);
  }, [data]);

  return (
    <div className={cx("wrapper")}>
      <Bar
        data={{
          labels: ["( People )"],
          axisLabels: ["AA", "ddd"],
          datasets: [
            {
              label: ["YES"],
              data: [yes],
              backgroundColor: ["#8e020299"],
              borderColor: ["#8e0202"],
              borderWidth: 1,
            },
            {
              label: ["NO"],
              data: [no],

              backgroundColor: ["#d6a25199"],
              borderColor: ["#d6a251"],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          layout: {
            padding: 20,
          },

          plugins: {
            title: {
              display: true,
              font: {
                size: 18,
              },
              text: "Số người tham dự lễ cưới", // Set the title for the chart
            },
          },
        }}
        width={250}
        height={500}
      />
    </div>
  );
}

export default Analyst;
