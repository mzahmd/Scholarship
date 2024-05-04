import { createBrowserRouter } from "react-router-dom";

import Admin from "./pages/Admin";
import Applications from "./pages/Applications";
import AuthTabs from "./pages/AuthTabs";
import Information from "./pages/Information";
import Layout from "./pages/Layout";
import Profil from "./pages/Profil";

import ProtectedRoute from "./components/ProtectedRoute";
import ApplicationCreate from "./pages/ApplicationCreate";

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
        index: true, element: (
          <ProtectedRoute>
            <Information />
          </ProtectedRoute>
        )
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
        ),
      },
      {
        path: "create",
        element: <ApplicationCreate />
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
