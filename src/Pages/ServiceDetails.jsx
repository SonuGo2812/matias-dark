import React from "react";
import { PlayFill, ArrowRight } from "react-bootstrap-icons";
import PageHeader from "../Components/Shared/PageHeader/PageHeader";
import Accordion from "../Components/Accordion/Accordion";

import serDv1 from "../assets/img/project/ser-dv1.png";
import serDv2 from "../assets/img/project/ser-dv2.png";
import detialcontact from "../assets/img/contact/ser-detialcontact.png";
import { ScrollRestoration } from "react-router-dom";

const accordionList = [
  {
    id: "cmnid4",
    heading: "How do you start a website project?",
    para: ` I start by understanding your business, pages, content,
    target audience, and platform needs. After that, I plan the
    structure, design flow, and development approach before building
    the website.`,
  },
  {
    id: "cmnid5",
    heading: "Can you work with CMS and eCommerce websites?",
    para: ` Yes. I build and customize WordPress, Shopify, WooCommerce,
    Elementor, Divi, ACF, and CMS-based websites with clean layouts,
    responsive sections, and easy-to-manage content.`,
  },
  {
    id: "cmnid6",
    heading: "Will the website be responsive and SEO-friendly?",
    para: ` I focus on mobile-friendly design, clean page structure,
    performance basics, SEO-friendly sections, and a smooth user
    experience so the website works well for real visitors.`,
  },
];
const ServiceDetails = () => {

  return (
    <>
 
      <PageHeader heading={"Website Development"} page={"Website Development"} />
      <section className="service__details overhid pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="ser__left__details">
                <div className="thumb">
                  <img src={serDv1} alt="img" />
                </div>
                <div
                  className="text__box mb__cus60"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <h3 className="textt36 d-block">
                    About Website Development Service
                  </h3>
                  <p className="fz-16 pra ttext__one">
                    I create responsive, user-friendly, and conversion-focused
                    websites for businesses, brands, and service providers. My
                    main work includes WordPress, Shopify, Elementor,
                    WooCommerce, Divi, ACF, and CMS-based website development.
                  </p>
                  <p className="fz-16 pra">
                    Each website is built with clean design, clear content
                    structure, SEO-friendly sections, and easy content
                    management so business owners can update pages without
                    difficulty.
                  </p>
                </div>
                <div
                  className="text__box mb__cus60"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <h3 className="textt36 d-block">
                    Specialization & Working Process
                  </h3>
                  <p className="fz-16 pra">
                    My workflow covers website planning, page layout, CMS setup,
                    responsive development, eCommerce configuration, content
                    structure, testing, and launch support. I also work on
                    landing pages, service pages, product pages, ACF dynamic
                    content, and custom website solutions based on project
                    requirements.
                  </p>
                </div>
                <div className="paythumb position-relative">
                  <img src={serDv2} alt="img" />
                  <a
                    href="https://www.youtube.com/watch?v=zFuJgOiUEso&amp;ab_channel=SujithRajendran"
                    className="video__80 video-btn"
                  >
                    <i>
                      <PlayFill />
                    </i>
                  </a>
                </div>
                <div className="ser__components">
                  <h2 className="whites mb-5">Questions ? You Are Covered</h2>
                  <div className="accordion" id="accordionExample">
                    {accordionList.map(({ id, heading, para }) => (
                      <Accordion key={id} id={id} heading={heading} para={para} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service__right__wrap">
                <div className="service__rightbox mb-30">
                  <h3>Service List</h3>
                  <a href="#0" className="link__box mb-15">
                    WordPress Development
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="#0" className="link__box mb-15">
                    Shopify Store Setup
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="#0" className="link__box mb-15">
                    Elementor Landing Pages
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="#0" className="link__box mb-15">
                    WooCommerce Development
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="#0" className="link__box mb-15">
                    ACF Dynamic Websites
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="#0" className="link__box">
                    Website Maintenance
                    <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
                <div className="service__rightbox">
                  <div className="thumb">
                    <img
                      src={detialcontact}
                      alt="img"
                    />
                    <a href="#0" className="cmn--btn">
                      <span>Contact Me</span>
                      <span>
                        <i>
                          <ArrowRight/>
                        </i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration/>
    </>
  );
};

export default ServiceDetails;
