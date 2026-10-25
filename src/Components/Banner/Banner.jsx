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
                  Jodhpur & India — Web Development Studio
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
              <div className="banner__ai-hint mt-4">
                <button
                  type="button"
                  onClick={() => {
                    const btn = document.getElementById("cp-s-robot-btn") || document.getElementById("cp-s-expand-btn");
                    if (btn) btn.click();
                  }}
                  className="banner__ai-trigger d-inline-flex align-items-center gap-2"
                  title="Ask 24/7 Virtual Assistant"
                >
                  <span className="ai-pulse-dot"></span>
                  <span>Have questions? <strong>Ask 24/7 AI Guide</strong></span>
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={`banner__thumb  ${
                position ? "right_up_animat" : "right_up"
              }`}
            >
              <img src={bannerMan} alt="Sonu Goswami - Website Developer in Jodhpur, Nexa Studio" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner__leftinfo">
        <div className="left__infomobile">
          <a href="mailto:goswamisonu2812@gmail.com">
            <img src={dial} alt="Email Sonu Goswami" />
          </a>
          <a href="mailto:goswamisonu2812@gmail.com">goswamisonu2812@gmail.com</a>
        </div>
        <div className="right__infoscroll">
          <HashLink smooth to="/#about" className="scroll">
            scroll down
          </HashLink>
          <HashLink smooth to="/#about" className="scroll__bar">
            <img src={scrollDown} alt="Scroll down to explore portfolio" />
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default Banner;
