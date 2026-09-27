import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact/Contact";
import Protfolio from "../Pages/Protfolio/Protfolio";
import AllTools from "../Pages/Tools/AllTools";
import ToolDetails from "../Pages/Tools/ToolDetails";

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
        path: "/tools",
        element: <AllTools />,
      },
      {
        path: "/store",
        element: <AllTools />,
      },
      {
        path: "/tools/:id",
        element: <ToolDetails />,
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
