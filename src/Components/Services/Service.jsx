import React from "react";
import { ArrowUpRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const Service = ({ heading, subHeading, para, id }) => {
  return (
    <div
      className="service__unique__item pb-40 pt-40"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="left__service">
        <div className="serial__adjust">
          <span> {id} </span>
          <div className="cont">
            <h5>{subHeading}</h5>
            <h3>
              <Link to={"/contact"}> {heading} </Link>
            </h3>
          </div>
        </div>
        <p className="pra">{para}</p>
      </div>
      <Link to={"/contact"} className="common__icon">
        <ArrowUpRight className="i" />
      </Link>
    </div>
  );
};

export default Service;
