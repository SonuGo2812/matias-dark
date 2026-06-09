import React from "react";
import { ArrowUpShort, ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const quickLinks = [
  {
    id: 1,
    label: "Work",
    path: "/#projects",
    icon: <ArrowRight />,
  },
  {
    id: 2,
    label: "Services",
    path: "/#services",
    icon: <ArrowRight />,
  },
  {
    id: 3,
    label: "Process",
    path: "/#process",
    icon: <ArrowRight />,
  },
  {
    id: 4,
    label: "Contact",
    path: "/contact",
    icon: <ArrowRight />,
  },
];
const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="container">
        <div className="footer__top pt-120 pb-120">
          <div className="fl" data-aos="fade-up" data-aos-duration="1000">
            Get In Touch
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="get__content">
                <p>
                  Hello, I am Sonu Goswami, a Website Developer based in India,
                  working worldwide on WordPress, Shopify, WooCommerce, and CMS
                  website solutions.
                </p>
                <a href="mailto:sonu998999@gmail.com">sonu998999@gmail.com</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="get__rightcontetn">
                <div className="row g-4">
                  {quickLinks.map(({ id, icon, label, path }) => {
                    return (
                      <div key={id} className="col-lg-6 col-md-6 col-sm-6">
                        <HashLink smooth to={path} className="social__footer">
                          {label}
                          <i>{icon}</i>
                        </HashLink>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom cmn__bg">
        <div className="container">
          <div className="copyright">
            <p className="white">
              Copyright 2026{" "}
              <Link to={"/"} className="base">
                Sonu Goswami.
              </Link>{" "}
              All rights reserved.
            </p>
            <ul className="terms">
              <li>
                <a href="mailto:sonu998999@gmail.com"> Email </a>
              </li>
              <li>
                <HashLink smooth to="/#projects"> Portfolio </HashLink>
              </li>
            </ul>
            <HashLink smooth to="/#home" className="toparrow">
              <i>
                <ArrowUpShort />
              </i>
            </HashLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
