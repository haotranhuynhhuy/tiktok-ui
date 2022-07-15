import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react/headless";
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
} from "@fortawesome/free-solid-svg-icons";
import AccountItems from "../../../AccountItems";
const cs = classNames.bind(styles);
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setSearchResult([1, 2, 3]);
  }, []);
  return (
    <header className={cs("wrapper")}>
      <div className={cs("inner")}>
        <img src={images.logo} alt="Tiktok" />
        <Tippy
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
        </Tippy>
        <div className={cs("action")}>
          <Buttons upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </Buttons>
          <Buttons primary>Log in</Buttons>
        </div>
      </div>
    </header>
  );
}

export default Header;
