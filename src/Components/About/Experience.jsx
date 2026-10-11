import React from "react";
import experiencePhoto from "../../assets/img/about/experience-photo.png";

const Experience = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "experience" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={experiencePhoto} alt="Sonu Goswami - 5+ Years Web Development Experience in Jodhpur" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Experience</h2>
              <p>
                Experienced website developer based in Jodhpur with 5+ years of
                hands-on experience building modern, responsive, and conversion-focused
                websites for businesses, brands, and creators locally and globally.
                Skilled in custom web solutions, WordPress, Shopify, Elementor,
                WooCommerce, Divi, and modern frontend architecture.
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="expri__date fz-18 fw-500 base">In 2021</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">WordPress Developer</h4>
                    <p className="fz-18 pra d-block">Freelance Projects</p>
                    <p className="fz-16 pra d-block">
                      Custom WordPress websites, landing pages, Elementor
                      layouts, responsive fixes, and website customization.
                    </p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="expri__date fz-18 fw-500 base">In 2024</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Website Developer</h4>
                    <p className="fz-18 pra d-block">Shopify and CMS Development</p>
                    <p className="fz-16 pra d-block">
                      Shopify, WooCommerce, Divi, business websites, service
                      pages, eCommerce stores, and scalable website structures.
                    </p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="expri__date fz-18 fw-500 base">In 2026</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Frontend Developer</h4>
                    <p className="fz-18 pra d-block">Learning React Development</p>
                    <p className="fz-16 pra d-block">
                      Learning React and modern frontend workflows for flexible,
                      interactive, and custom web experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
