import { createBrowserRouter } from "react-router-dom";
import Administraion from "./pages/Administration";
import Applications from "./pages/Applications";
import AuthTabs from "./pages/AuthTabs";
import Information from "./pages/Information";
import Layout from "./pages/Layout";
import Profil from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthTabs />,
  },
  {
    path: "user",
    element: <Layout />,
    children: [
      {
        index: true, element: <Information />
      },
      { path: "applications", element: <Applications /> },
      { path: ":id", element: <Profil /> }
    ]
  },
  {
    path: "admin",
    element: <Layout />,
    children: [
      { index: true, element: <Administraion /> },
    ]
  }
])

export default router;