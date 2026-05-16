import React from "react";
import { XLg, ChevronRight } from "react-bootstrap-icons";
import logo from "../../../assets/img/logo/logo.png";
import { socialIcons } from "../../../Utlits/socilIcons";
import { Link } from "react-router-dom";

const Drawer = ({ isSidebarActive, setIsSidebarActive }) => {
  return (
    <div className={`subside__barmenu ${isSidebarActive ? "active" : ""}`}>
      <div
        onClick={() => setIsSidebarActive(false)}
        className="remove__click d-flex justify-content-center align-items-center"
      >
        <i>
          <XLg />
        </i>
      </div>
      <div className="sub__contact__wrapper d-grid">
        <Link to={""} className="side-logo">
          <img src={logo} alt="img" />
        </Link>
        <p>
          Website Developer specializing in WordPress, Shopify, Elementor,
          WooCommerce, Divi, ACF, and custom website solutions for businesses
          working worldwide.
        </p>
        <div className="sub__contact-left d-grid">
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> location </span>
              <span className="textp"> India, Working Worldwide </span>
            </div>
          </div>
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> email </span>
              <Link className="textp"> sonu998999@gmail.com </Link>
            </div>
          </div>
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> experience </span>
              <Link className="textp"> 5+ Years </Link>
            </div>
          </div>
        </div>
        <div className="sub__contact-right mb-80 position-relative">
          <ul className="social d-flex gap-3">
            {socialIcons.map(({ icon, id }) => (
              <li key={id}>
                <Link>
                  <i>{icon}</i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          to={"/contact"}
          className="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2"
        >
          <span>
            <i>
              <ChevronRight />
            </i>
          </span>
          <span className="get__text"> Let us Talk </span>
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
