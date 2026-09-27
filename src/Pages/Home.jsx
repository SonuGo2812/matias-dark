import React, { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";

import { serviceLabels, statsLabels } from "../Utlits/marqueeItems";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import FeaturedTools from "../Components/Tools/FeaturedTools";
import Metting from "../Components/Metting/Metting";
import Services from "../Components/Services/Services";
import WorkeProcess from "../Components/WorkeProcess/WorkeProcess";
import MarqueeWapper from "../Components/Shared/Marquee/MarqueeWapper";
import Awards from "../Components/About/Awards";
import Preloader from "../Components/Shared/Preloader/Preloader";

const Home = () => {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);
    }, 1500);
  }, []);

  return (
    <>
      {isFetching && <Preloader />}
      <MarqueeWapper direction="left" labels={serviceLabels} />
      <About />
      <MarqueeWapper direction="right" labels={statsLabels} />
      <Awards />
      <Projects />
      <FeaturedTools />
      <Metting />
      <Services isHeading={true} />
      <WorkeProcess />
      <ScrollRestoration />
    </>
  );
};

export default Home;
