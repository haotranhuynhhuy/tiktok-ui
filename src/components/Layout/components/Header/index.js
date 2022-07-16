import { useEffect, useState } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

import Buttons from "../../../Buttons";
import { Wrapper as PopperWrapper } from "../../../../components/Popper";
import images from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faPlus,
  faArrowRightToBracket,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faCloudArrowUp,
  faMessage,
  faSignOut,
  faUser,
  faCoins,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import AccountItems from "../../../AccountItems";
import Menu from "../../../Popper/Menu";

const cs = classNames.bind(styles);
function Header() {
  const currentUser = true;
  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: "English",
      children: {
        title: "Language",
        data: [
          {
            code: "en",
            title: "English",
          },
          {
            code: "vi",
            title: "Tiếng Việt",
          },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Feedback and help",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: "Keyboard shortcut",
    },
  ];

  const MENU_USER_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@anh",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coin",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/",
      separate: true,
    },
  ];

  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setSearchResult([1, 2, 3]);
  }, []);
  return (
    <header className={cs("wrapper")}>
      <div className={cs("inner")}>
        <img src={images.logo} alt="Tiktok" />
        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attr) => (
            <div className={cs("search-result")} tabIndex="-1" {...attr}>
              <PopperWrapper>
                <h4 className={cs("search-title")}>Account</h4>
                <AccountItems />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cs("search")}>
            <input placeholder="Search accounts and videos" />
            <button className={cs("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cs("loading")} icon={faSpinner} />
            <button className={cs("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cs("action")}>
          {currentUser ? (
            <>
              <Tippy
                delay={[0, 250]}
                content="Update videos"
                placement="bottom"
              >
                <button className={cs("action-btn")}>
                  <FontAwesomeIcon icon={faCloudArrowUp} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Buttons upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Buttons>
              <Buttons primary>Log in</Buttons>
            </>
          )}
          <Menu items={currentUser ? MENU_USER_ITEMS : MENU_ITEMS}>
            {currentUser ? (
              <img
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/291320840_114880147922667_7541122576818673587_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4A497-GQvVwAX926vqF&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT_zr-OZoIqr_14glwoAheB97N_6Iblh8T45k7yfq6tJLQ&oe=62D8191E"
                className={cs("user-avatar")}
                alt="Anh"
              />
            ) : (
              <>
                <button className={cs("more-btn")}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
