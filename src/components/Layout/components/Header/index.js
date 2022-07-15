import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const cs = classNames.bind(styles);
console.log(images);
function Header() {
  return (
    <header className={cs("wrapper")}>
      <div className={cs("inner")}>
        <div className={cs("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
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
        <div className={cs("action")}></div>
      </div>
    </header>
  );
}

export default Header;
