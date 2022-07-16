import classNames from "classnames/bind";
import styles from "./Popper.module.scss";
const cs = classNames.bind(styles);
function Wrapper({ children, className }) {
  return <div className={cs("wrapper", className)}>{children}</div>;
}

export default Wrapper;
