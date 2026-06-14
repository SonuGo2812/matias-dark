import React, { useEffect } from "react";
import personalInfoThumb from "../../assets/img/about/personal-infothumb.png";

import AOS from "aos";
import "aos/dist/aos.css";

const contactInfo = [
  {
    id: 1,
    system: "Email",
    contact: "goswamisonu2812@gmail.com",
  },
  {
    id: 2,
    system: "Experience",
    contact: "5+ Years",
  },
  {
    id: 3,
    system: "Location",
    contact: "India, Working Worldwide",
  },
  {
    id: 4,
    system: "Availability",
    contact: "Open for website projects",
  },
];
const AboutMe = ({ isTabActive }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`tabitem ${isTabActive === "about" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div
              className="about__onethumb"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <img src={personalInfoThumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2
                className="h2-head"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Personal Info
              </h2>
              <p
                className="p-descrip"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Passionate website developer with 5+ years of experience
                creating modern, responsive, and user-focused websites. Skilled
                in WordPress, Shopify, Elementor, WooCommerce, Divi, and custom
                website solutions, with a strong focus on clean design,
                performance, SEO-friendly structure, and smooth user experience.
                Currently expanding my skills in React and modern custom
                development to build more flexible and scalable web solutions.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {contactInfo.map(({ id, contact, system }) => {
                    return (
                      <div
                        key={id}
                        className="col-xxl-6 col-xl-6 col-lg-12 col-md-6"
                        data-aos="zoom-in"
                      >
                        <div className={`abox${system === "Email" ? " abox--email" : ""}`}>
                          <div className="about__contbox__item">
                            <span className="ptext fz-18 mb-20 d-block">
                              {system}
                            </span>
                            {system === "Email" ? (
                              <a href={`mailto:${contact}`} className="contact__email">
                                <span className="contact__email-line">
                                  {contact.split("@")[0]}@
                                </span>
                                <span className="contact__email-line">
                                  {contact.split("@")[1]}
                                </span>
                              </a>
                            ) : (
                              <span className="contact__text">{contact}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
