import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";
import figma from "../../assets/img/about/figma.png";
import word from "../../assets/img/about/word.png";
import html from "../../assets/img/about/html.png";
import boot from "../../assets/img/about/boot.png";

const skillsList = [
  {
    id: 1,
    skill: "WordPress",
    percentage: "95%",
    image: figma,
  },
  {
    id: 2,
    skill: "Elementor",
    percentage: "95%",
    image: word,
  },
  {
    id: 3,
    skill: "Shopify",
    percentage: "90%",
    image: html,
  },
  {
    id: 4,
    skill: "WooCommerce",
    percentage: "90%",
    image: boot,
  },
  {
    id: 5,
    skill: "Divi",
    percentage: "90%",
    image: figma,
  },
  {
    id: 6,
    skill: "HTML / CSS",
    percentage: "95%",
    image: word,
  },
  {
    id: 7,
    skill: "Bootstrap",
    percentage: "90%",
    image: html,
  },
  {
    id: 8,
    skill: "Figma",
    percentage: "85%",
    image: boot,
  },
  {
    id: 9,
    skill: "ACF / Dynamic Content",
    percentage: "85%",
    image: figma,
  },
  {
    id: 10,
    skill: "React",
    percentage: "65%",
    image: word,
  },
];
const Skills = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "skills" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Skills</h2>
              <p>
                I work with CMS platforms, eCommerce solutions, design tools,
                and frontend technologies to build clean, responsive, and
                business-focused websites.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {skillsList.map(({ id, skill, image, percentage }) => {
                    return (
                      <div key={id} className="col-xxl-6 col-xl-6 col-lg-12 col-md-6">
                        <div className="abox myskill__item">
                          <div className="thumb">
                            <img src={image} alt="img" />
                          </div>
                          <div className="mys">
                            <span className="ptext fz-18 mb-15 d-block">{skill}</span>
                            <h1 className="fw-600">{percentage}</h1>
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

export default Skills;
