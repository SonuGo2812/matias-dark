import React from "react";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import Form from "../../Components/Shared/Form/Form";
import { ScrollRestoration } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <PageHeader
        heading={"Need a Website?"}
        page={"Contact"}
      />
      <section className="contact__section">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-8"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="contact__box">
                <Form isColTwo={false} />
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="contact__rightside cmn__bg">
                <h4 className="mb-30">Feel free to contact me anytime</h4>
                <div className="contact__item mb-20">
                  <span className="he1">Email</span>
                  <a href="mailto:goswamisonu2812@gmail.com">goswamisonu2812@gmail.com</a>
                </div>
                <div className="contact__item mb-20">
                  <span className="he1">Availability</span>
                  <span className="contact__text">Open for website projects</span>
                </div>
                <div className="contact__item">
                  <span className="he1">Location</span>
                  <span className="address">India, Working Worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default Contact;
