import { createBrowserRouter } from "react-router-dom";
import Admin from "./pages/Admin";
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
    path: "information",
    element: <Layout />,
    children: [
      {
        index: true, element: <Information />
      },
    ]
  },
  {
    path: "user",
    element: <Layout />,
    children: [
      {
        index: true, element: <Profil />
      }
    ]
  },
  {
    path: "applications",
    element: <Layout />,
    children: [
      {
        index: true, element: <Applications />
      }
    ]
  },
  {
    path: "admin",
    element: <Layout />,
    children: [
      { index: true, element: <Admin /> },
    ]
  }
])

export default router;
