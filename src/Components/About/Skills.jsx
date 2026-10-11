import React from "react";
import skillsPhoto from "../../assets/img/about/skills-photo.png";

const skillsList = [
  {
    id: 1,
    skill: "WordPress",
  },
  {
    id: 2,
    skill: "Shopify",
  },
  {
    id: 3,
    skill: "eCommerce Website",
  },
  {
    id: 4,
    skill: "Custom Website",
  },
  {
    id: 5,
    skill: "Graphics Work",
  },
];
const Skills = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "skills" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={skillsPhoto} alt="Web Development and CMS Skills - Sonu Goswami Jodhpur" />
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
              <ul className="skills__points">
                {skillsList.map(({ id, skill }) => (
                  <li key={id}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
