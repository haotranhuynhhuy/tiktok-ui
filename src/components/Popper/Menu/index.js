import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "../../Popper";
import MenuItems from "./MenuItems";
import HeaderMenu from "./Header";
import { useState } from "react";
const cs = classNames.bind(styles);
function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);
  const currrent = history[history.length - 1];
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
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      interactive
      offset={[12, 8]}
      delay={[0, 700]}
      placement="bottom-end"
      render={(attr) => (
        <div className={cs("menu-list")} tabIndex="-1" {...attr}>
          <PopperWrapper className={cs("menu-popper")}>
            {history.length > 1 && (
              <HeaderMenu
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
