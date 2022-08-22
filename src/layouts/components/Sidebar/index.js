import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Menu from "./Menu";
import MenuItem from "./Menu/MenuItem";
import config from "../../../config";
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from "../../../components/Icons";
const cs = classNames.bind(styles);
function Sidebar() {
  return (
    <div className={cs("wrapper")}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>
    </div>
  );
}

export default Sidebar;
