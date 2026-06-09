import React from "react";
import Title from "../Shared/Title/Title";
import WorkProcessCard from "./WorkProcessCard";

const processList = [
  {
    id: 1,
    title: "Plan",
    info: "Clear website planning keeps the structure focused on business goals.",
    list: [
      "Review business goals and content needs",
      "Plan pages, sections, and user journey",
      "Define CMS or eCommerce requirements",
    ],
  },
  {
    id: 2,
    title: "Build",
    info: "Responsive development with clean layouts and easy content management.",
    list: [
      "Create WordPress, Shopify, or Elementor pages",
      "Set up WooCommerce, ACF, or CMS content",
      "Optimize responsive design and usability",
    ],
  },
  {
    id: 3,
    title: "Launch",
    info: "Final checks ensure the website is ready for real users.",
    list: [
      "Test mobile, desktop, forms, and key flows",
      "Check performance and SEO-friendly structure",
      "Deploy and prepare the website for updates",
    ],
  },
];
const WorkeProcess = () => {
  return (
    <section className="process__section pt-120 pb-120" id="process">
      <div className="container">
        <Title
          mainTitle="Your Website In A Clear Development Process"
          sortTitle="Working Process"
        />
        <div className="row g-4">
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkeProcess;
