import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import { HeaderOnlyLaybout } from "../components/Layout";
import routeConfig from "../config/route";
const publicRoutes = [
  { path: routeConfig.home, component: Home },
  { path: routeConfig.following, component: Following },
  { path: routeConfig.profile, component: Profile },
  { path: routeConfig.upload, component: Upload, layout: HeaderOnlyLaybout },
];
const privateRoutes = [];

export { publicRoutes };
