import { createBrowserRouter } from "react-router-dom";
import AuthTabs from "./pages/AuthTabs";
import Layout from "./pages/Layout";
import Information from "./components/Information";
import Applications from "./pages/Applications";
import Profil from "./pages/Profile";
import Administraion from "./pages/Administration";

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