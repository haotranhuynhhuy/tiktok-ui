import classNames from "classnames/bind";
import styles from "./AccountItems.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Image from "../../components/Image";
import PropTypes from "prop-types";
const cs = classNames.bind(styles);
function AccountItems({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cs("wrapper")}>
      <Image className={cs("avatar")} src={data.avatar} alt={data.full_name} />
      <div className={cs("infor")}>
        <h4 className={cs("name")}>
          <span>{data.full_name}</span>
          {data.tick && (
            <FontAwesomeIcon className={cs("check")} icon={faCheckCircle} />
          )}
        </h4>
        <span className={cs("username")}>{data.nickname}</span>
      </div>
    </Link>
  );
}
AccountItems.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItems;
