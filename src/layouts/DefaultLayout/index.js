import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "../components/Header";
import Sidebar from "./Sidebar";

const cs = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cs("wrapper")}>
      <Header />
      <div className={cs("container")}>
        <Sidebar />
        <div className={cs("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
