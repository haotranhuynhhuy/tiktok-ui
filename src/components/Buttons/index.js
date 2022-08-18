import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
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

Buttons.propTypes = {
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  upload: PropTypes.bool,
  rounded: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  disable: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,

}
export default Buttons;
