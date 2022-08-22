import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import { HeaderOnlyLaybout } from "../layouts";
import config from "../config";
import Live from "../pages/Live";
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnlyLaybout },
  { path: config.routes.live, component: Live }
];
// const privateRoutes = [];

export { publicRoutes };
