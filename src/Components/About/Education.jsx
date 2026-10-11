import React from "react";
import educationPhoto from "../../assets/img/about/education-photo.png";

const Education = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "education" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={educationPhoto} alt="Computer Applications and Web Development Studies - Sonu Goswami" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Education</h2>
              <p>
                My education background helped me build a strong foundation in
                computer science, programming logic, and web technologies. After
                completing science education with mathematics, I continued into
                computer applications and started my professional journey in
                website development.
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2018</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Senior Secondary Education</h4>
                    <p className="fz-18 pra d-block">Science with Mathematics</p>
                    <p className="fz-16 pra d-block">
                      Built analytical and problem-solving skills through a
                      science and mathematics foundation.
                    </p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2018 to 2021</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Computer Applications Program</h4>
                    <p className="fz-18 pra d-block">Bachelors Level Study</p>
                    <p className="fz-16 pra d-block">
                      Studied programming fundamentals, web technologies,
                      databases, and software development concepts.
                    </p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2021 to Present</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Professional Web Development Journey</h4>
                    <p className="fz-18 pra d-block">Website Development and CMS Projects</p>
                    <p className="fz-16 pra d-block">
                      Gained hands-on experience in WordPress, Shopify,
                      WooCommerce, Elementor, Divi, CMS websites, and modern web
                      workflows.
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

export default Education;
