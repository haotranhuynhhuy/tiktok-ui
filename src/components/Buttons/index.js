import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
const cs = classNames.bind(styles);
function Buttons({
  primary = false,
  outline = false,
  small = false,
  large = false,
  upload = false,
  rounded = false,
  leftIcon,
  rightIcon,
  to,
  href,
  children,
  onClick,
}) {
  let Comp = "button";
  const props = {
    onClick,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  //tao them class co ten la primary
  const classes = cs("wrapper", {
    primary,
    outline,
    small,
    large,
    upload,
    rounded,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cs("icon")}>{leftIcon}</span>}
      <span className={cs("title")}>{children}</span>
      {rightIcon && <span className={cs("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Buttons;
