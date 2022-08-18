import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
const cs = classNames.bind(styles);
function HeaderMenu({ title, onBack }) {
  return (
    <header className={cs("header")}>
      <button className={cs("back-btn")} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cs("header-title")}>{title}</h4>
    </header>
  );
}
HeaderMenu.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func
}

export default HeaderMenu;
