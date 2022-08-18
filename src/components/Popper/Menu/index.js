import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "../../Popper";
import MenuItems from "./MenuItems";
import HeaderMenu from "./Header";
import { useState } from "react";
import PropTypes from 'prop-types';
const cs = classNames.bind(styles);
function Menu({ children, items, hideOnClick = false, onChange }) {

  const [history, setHistory] = useState([{ data: items }]);
  const currrent = history[history.length - 1];
  // Làm cái menu dưới icon-user

  const renderItems = () => {
    return currrent.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItems
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item)
            }
          }}
        />
      );
    });
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  }

  const renderResult = (attr) => (
    <div className={cs("menu-list")} tabIndex="-1" {...attr}>
      <PopperWrapper className={cs("menu-popper")}>
        {history.length > 1 && (
          <HeaderMenu
            title={currrent.title}
            onBack={handleBack}
          />
        )}
        <div className={cs("menu-body")}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  )
  //cắt chuỗi trong Mảng Menu
  const handleResetToFirstMenu = () => setHistory((prev) => prev.slice(0, 1))
  return (
    <Tippy
      interactive
      hideOnClick={hideOnClick}
      offset={[12, 8]}
      delay={[0, 700]}
      placement="bottom-end"
      render={renderResult}
      onHide={handleResetToFirstMenu}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.func,
  onChange: PropTypes.func
}
export default Menu;
