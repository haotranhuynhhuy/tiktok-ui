import classNames from "classnames/bind";
import styles from "./Popper.module.scss";
import PropTypes from 'prop-types';
const cs = classNames.bind(styles);
function Wrapper({ children, className }) {
  return <div className={cs("wrapper", className)}>{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string
}
export default Wrapper;
