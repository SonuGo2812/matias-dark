import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

import bannerMan from "../../assets/img/banner/banner-man.png";
import scrollDown from "../../assets/img/banner/scroll-down.png";
import dial from "../../assets/img/banner/dial.png";

const Banner = () => {
  const [position, setPosition] = useState(false);

  useEffect(() => {
    setPosition(true);
  }, []);

  return (
    <section id="home">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="banner__content">
              <HashLink smooth to="/contact" className="bn__currently">
                <span className="d-block">
                  Available for website projects
                </span>
                <span className="d-flex gap-4 align-items-center">
                  India, working worldwide
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </HashLink>
              <h1>
                <span className="hone"> Website</span>
                <span className="d-block designers" data-text="Developer">
                  Developer
                </span>
              </h1>
              <div className="banner__actions">
                <HashLink
                  smooth
                  to="/#projects"
                  className="d-flex fw-500 cmn--btn align-items-center gap-2"
                >
                  <span className="get__text">View Work</span>
                </HashLink>
                <HashLink
                  smooth
                  to="/contact"
                  className="d-flex fw-500 cmn--btn align-items-center gap-2"
                >
                  <span className="get__text">Contact Me</span>
                </HashLink>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={`banner__thumb  ${
                position ? "right_up_animat" : "right_up"
              }`}
            >
              <img src={bannerMan} alt="man-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner__leftinfo">
        <div className="left__infomobile">
          <a href="mailto:goswamisonu2812@gmail.com">
            <img src={dial} alt="img" />
          </a>
          <a href="mailto:goswamisonu2812@gmail.com" className="left__info-email">
            goswamisonu2812@gmail.com
          </a>
        </div>
        <div className="right__infoscroll">
          <HashLink smooth to="/#about" className="scroll">
            scroll down
          </HashLink>
          <HashLink smooth to="/#about" className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default Banner;
