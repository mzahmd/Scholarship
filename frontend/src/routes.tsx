import { createBrowserRouter } from "react-router-dom";
import AuthTabs from "./pages/AuthTabs";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthTabs />,
  },
  {
    path: "user",
    element: <Navbar />
  }
])

export default router;