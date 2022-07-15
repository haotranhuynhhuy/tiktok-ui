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
        src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/178650195_629558188000336_2324268937855998971_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_aid=0&_nc_ohc=Bx9jix3spVIAX-yx8Qw&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT8mAgN-WDKL5JzwBp1MfoXkKmHQVI5qidRwsYI7LenTcA&oe=62F50434"
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
