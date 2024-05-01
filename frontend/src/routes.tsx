import { createBrowserRouter } from "react-router-dom";
import AuthTabs from "./pages/AuthTabs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthTabs />,
  }
])

export default router;