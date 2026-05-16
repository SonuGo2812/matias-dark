import React from "react";
import Service from "./Service";
import Title from "../Shared/Title/Title";

const serviceList = [
  {
    id: "01",
    heading: "WordPress Development",
    subHeading: "CMS Websites",
    para: "Custom WordPress websites, service pages, landing pages, and easy-to-manage CMS builds for businesses.",
  },
  {
    id: "02",
    heading: "Shopify Store Development",
    subHeading: "eCommerce",
    para: "Responsive Shopify stores, product pages, collections, theme setup, and conversion-focused store experiences.",
  },
  {
    id: "03",
    heading: "Elementor Website Design",
    subHeading: "Page Builder",
    para: "Clean Elementor layouts, responsive sections, landing pages, and flexible pages clients can manage easily.",
  },
  {
    id: "04",
    heading: "WooCommerce Solutions",
    subHeading: "Online Stores",
    para: "WooCommerce setup, product pages, checkout flows, store structure, and business-ready eCommerce websites.",
  },
  {
    id: "05",
    heading: "Custom Website Solutions",
    subHeading: "ACF and Frontend",
    para: "ACF-powered dynamic content, Divi customization, responsive fixes, and modern frontend improvements.",
  },
];
const Services = ({ isHeading }) => {
  return (
    <section
      id="services"
      className={`service__section overhid ${isHeading && "pt-120"}  pb-120`}
    >
      <div className="container">
        {isHeading && (
          <Title
            mainTitle="Website Development Services For Business Growth"
            sortTitle="Services That I Provide"
          />
        )}

        <div className={`service__uniquewrap `}>
          {serviceList.map(({ id, heading, subHeading, para }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
