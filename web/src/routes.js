import { createBrowserRouter } from "react-router-dom";
import NotFound from "./components/notFound";
import IntroPage from "./pages/intro";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Signup from "./pages/signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/user/login",
    element: <Login />,
  },
  //   Add your routes here
  {
    path: "/user/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
