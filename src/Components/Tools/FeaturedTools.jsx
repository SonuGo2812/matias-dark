import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
import Title from "../Shared/Title/Title";
import ToolCard from "./ToolCard";
import { toolsData } from "../../Utlits/toolsData";

const FeaturedTools = () => {
  return (
    <section className="tools__section pt-120 pb-120" id="tools">
      <div className="container">
        <Title
          mainTitle={"Custom Web Tools & Software"}
          sortTitle={"Digital Products"}
        />

        <div className="row g-4 justify-content-center">
          {toolsData.map((tool) => (
            <div key={tool.id} className="col-lg-5 col-md-7 col-sm-10">
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>

        <div className="text-center mt-50" data-aos="fade-up" data-aos-duration="1000">
          <Link
            to="/tools/chat-pilot"
            className="d-inline-flex fw-500 cmn--btn align-items-center gap-2"
          >
            <span>View Chat Pilot Features & Live Demo</span>
            <ArrowRight className="fz-20" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
