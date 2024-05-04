import { createBrowserRouter } from "react-router-dom";

import Admin from "./pages/Admin";
import Applications from "./pages/Applications";
import AuthTabs from "./pages/AuthTabs";
import Information from "./pages/Information";
import Layout from "./pages/Layout";
import Profil from "./pages/Profil";

import ProtectedRoute from "./components/ProtectedRoute";

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
        index: true, element: (
          <ProtectedRoute>
            <Profil />
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path: "applications",
    element: <Layout />,
    children: [
      {
        index: true, element: (
          <ProtectedRoute>
            <Applications />
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path: "admin",
    element: <Layout />,
    children: [
      {
        index: true, element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        )
      },
    ]
  }
])

export default router;
