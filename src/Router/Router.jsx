import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact/Contact";
import Protfolio from "../Pages/Protfolio/Protfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: <Protfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/protfolio",
        element: <Navigate to="/portfolio" replace />,
      },
    ],
  },
]);
