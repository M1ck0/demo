import Dashboard from "pages/dashboard";
import Logout from "pages/logout";

const router = [
  {
    name: "Dashboard",
    path: "/",
    component: () => <Dashboard />,
  },
  {
    name: "Logout",
    path: "/logout",
    component: () => <Logout />,
  },
];

export default router;
