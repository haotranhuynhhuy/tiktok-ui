import Buttons from "../../Buttons";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cs = classNames.bind(styles);
function MenuItems({ data, onClick }) {
  const classes = cs("menu-items", {
    separate: data.separate,
  });
  return (
    <Buttons
      className={classes}
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Buttons>
  );
}

export default MenuItems;
