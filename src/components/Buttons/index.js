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
  disable,
  className,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };
  if (disable) {
    Object.keys(props).forEach((propsKey) => {
      if (propsKey.startsWith("on") && typeof props[propsKey] === "function") {
        delete props[propsKey];
      }
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  //tao them class co ten la primary
  const classes = cs("wrapper", {
    [className]: className,
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
