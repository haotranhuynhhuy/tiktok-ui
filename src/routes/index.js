import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import { HeaderOnlyLaybout } from "../components/Layout";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/@:nickname", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnlyLaybout },
];
const privateRoutes = [];

export { publicRoutes };
