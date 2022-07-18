import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

import Buttons from "../../../Buttons";
import images from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faSignOut,
  faUser,
  faCoins,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "../../../Popper/Menu";
import { MessageIcon, UploadIcon, InboxIcon } from "../../../Icons";
import Image from "../../../../Image";
import Search from "../../Search";

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

  return (
    <header className={cs("wrapper")}>
      <div className={cs("inner")}>
        <img src={images.logo} alt="Tiktok" />
        {/* Searchingggggggg */}
        <Search />
        <div className={cs("action")}>
          {currentUser ? (
            <>
              <Tippy
                delay={[0, 250]}
                content="Update videos"
                placement="bottom"
              >
                <button className={cs("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 250]} content="Message" placement="bottom">
                <button className={cs("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 250]} content="Message" placement="bottom">
                <button className={cs("action-btn")}>
                  <InboxIcon />
                  <span className={cs("badge")}></span>
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
              <Image
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/291320840_114880147922667_7541122576818673587_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4A497-GQvVwAX926vqF&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT_zr-OZoIqr_14glwoAheB97N_6Iblh8T45k7yfq6tJLQ&oe=62D8191E"
                className={cs("user-avatar")}
                alt="Anh"
                // fallback="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/178650195_629558188000336_2324268937855998971_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_aid=0&_nc_ohc=5QZnJE8kfiUAX_4Q0xs&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT9jKVsmz-QA4nLh0DWlH8Trfbbh2N64TrFzj1dcdJy8Iw&oe=62F8F8B4"
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
