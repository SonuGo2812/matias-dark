import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router.jsx";
import { initSiteProtection } from "./Utlits/siteProtection.js";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    return initSiteProtection();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
