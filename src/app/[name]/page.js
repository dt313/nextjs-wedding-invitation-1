import classNames from "classnames/bind";
import styles from "./page.module.scss";

import Invitation from "~/app/components/invitation";

const cx = classNames.bind(styles);
export async function generateMetadata({ params, searchParams }) {
  const name = decodeURIComponent(params.name) || "You";
  return {
    title: `Thiệp cưới của Hằng và Quảng | Mời ${name}`,
    openGraph: {
      images: [
        "https://res.cloudinary.com/do6sozxbo/image/upload/v1702987668/wedding/gray/4.jpg",
      ],
    },
  };
}
function Main({ params }) {
  const name = decodeURIComponent(params.name) || "You";

  return (
    <div className={cx("wrapper")}>
      <Invitation name={name} />
    </div>
  );
}

export default Main;
