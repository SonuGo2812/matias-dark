import React from "react";
import { ArrowUpRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const ProjectCard = ({
  image,
  heading,
  subHeading,
  index,
  openLightbox,
  navigate,
  projectUrl,
}) => {
  const handlePreview = () => {
    if (projectUrl) {
      return;
    }

    openLightbox(index);
  };

  const projectContent = (
    <>
      <span className="base mb-2 mb-xxl-3 d-block text-uppercase">
        {heading}
      </span>
      <h3>{subHeading}</h3>
    </>
  );

  return (
    <div
      className={`project__item ${
        index === 2 || index === 3 ? "project__item--wide-cover" : ""
      } ${
        index !== 2 && "cus__mb60"
      }`}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {projectUrl ? (
        <a
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
          className="thumb mb-30 imgc d-block"
        >
          <img src={image} alt={heading} />
        </a>
      ) : (
        <div onClick={handlePreview} className="thumb mb-30 imgc">
          <img src={image} alt={heading} />
        </div>
      )}
      <div className="content d-flex align-items-center justify-content-between gap-2">
        {projectUrl ? (
          <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            className="left__cont"
          >
            {projectContent}
          </a>
        ) : navigate ? (
          <Link to={navigate} className="left__cont">
            {projectContent}
          </Link>
        ) : (
          <button
            type="button"
            onClick={handlePreview}
            className="left__cont bg-transparent border-0 text-start p-0"
          >
            {projectContent}
          </button>
        )}
        {projectUrl ? (
          <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            className="common__icon imgc"
          >
            <ArrowUpRight className="icon" />
          </a>
        ) : (
          <div onClick={handlePreview} className="common__icon imgc">
            <ArrowUpRight className="icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
