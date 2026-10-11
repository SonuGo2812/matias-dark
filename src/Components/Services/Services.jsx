import React from "react";
import Service from "./Service";
import Title from "../Shared/Title/Title";

const serviceList = [
  {
    id: "01",
    heading: "Custom Web Development",
    subHeading: "Bespoke Solutions",
    para: "Tailored WordPress, Shopify, and modern web development crafted for high speed, conversion optimization, and smooth business workflows.",
  },
  {
    id: "02",
    heading: "WordPress & CMS Development",
    subHeading: "Scalable CMS",
    para: "Custom WordPress websites, Elementor & Divi builds, service pages, and easy-to-manage CMS structures for growing businesses.",
  },
  {
    id: "03",
    heading: "eCommerce & Shopify Stores",
    subHeading: "Online Retail",
    para: "High-converting Shopify and WooCommerce online stores with custom product layouts, seamless payment gateways, and fast checkout flows.",
  },
  {
    id: "04",
    heading: "Modern UI/UX Design",
    subHeading: "User Interfaces",
    para: "Clean, responsive, mobile-first website designs that turn visitors into customers through engaging visual journeys and intuitive navigation.",
  },
  {
    id: "05",
    heading: "Fast Performance Solutions & SEO",
    subHeading: "Speed & Visibility",
    para: "Core Web Vitals optimization, clean on-page technical SEO structure, caching configurations, and rapid load times for maximum search visibility.",
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
