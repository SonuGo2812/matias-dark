import React, { useEffect } from "react";
import personalInfoPhoto from "../../assets/img/about/personal-info-photo.png";

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
    contact: "Jodhpur, Rajasthan & All India",
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
              <img src={personalInfoPhoto} alt="Sonu Goswami - Website Developer in Jodhpur, Nexa Studio" />
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
                I am a passionate website developer based in Jodhpur, Rajasthan,
                with 5+ years of experience creating modern, responsive, and
                user-focused websites. Through Nexa Studio, I craft bespoke web
                solutions for local businesses in Jodhpur as well as international
                brands. Skilled in custom web development, WordPress, Shopify,
                Elementor, WooCommerce, and modern frontend technologies, I focus
                on clean code, fast load times, semantic on-page SEO, and smooth
                user experiences that convert visitors into clients.
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
