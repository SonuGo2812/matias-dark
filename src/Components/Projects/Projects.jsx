import React from "react";

import Title from "../Shared/Title/Title";
import ProjectCard from "../Shared/ProjectCard/ProjectCard";
import { homeProjectList } from "../../Utlits/projectList";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="project__section pt-120 pb-120" id="projects">
      <div className="container">
        <Title
          mainTitle={"Explore my recent website projects."}
          sortTitle={"Work"}
        />

        <div className={`project__wrapone`}>
          {homeProjectList.map(({ heading, id, image, projectUrl, subHeading }, index) => (
            <ProjectCard
              key={id}
              image={image}
              heading={heading}
              subHeading={subHeading}
              projectUrl={projectUrl}
              index={index}
              navigate="/portfolio"
            />
          ))}
        </div>

        <div className="custom__hover">
          <Link to={"/portfolio"}
            className="hover__circle mauto"
            data-aos="zoom-out-down"
            data-aos-duration="2000"
          >
            <span className="box">
              <i className="bi bi-arrow-up-right"></i>
              <span className="textmore"> View My Work </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
