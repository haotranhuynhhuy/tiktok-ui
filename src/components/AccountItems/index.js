import classNames from "classnames/bind";
import styles from "./AccountItems.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cs = classNames.bind(styles);
function AccountItems() {
  return (
    <div className={cs("wrapper")}>
      <img
        className={cs("avatar")}
        src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/76200950_148451219867779_5947633315220553728_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2TpszzW1wjIAX8tZQnQ&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT_aeD2AoGz1HMLnC7r3L8dViNJcWrLl8hioUFVedDRwtQ&oe=62F9A078"
        alt="Anh"
      />
      <div className={cs("infor")}>
        <h4 className={cs("name")}>
          <span>Nguyeenx Van A</span>
          <FontAwesomeIcon className={cs("check")} icon={faCheckCircle} />
        </h4>
        <span className={cs("username")}> nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItems;
