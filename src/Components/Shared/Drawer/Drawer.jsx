import React from "react";
import { XLg, ChevronRight, Bag } from "react-bootstrap-icons";
import logo from "../../../assets/img/logo/nexa-studio-logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useCart } from "../../../context/CartContext";

const drawerLinks = [
  {
    id: 1,
    label: "About",
    path: "/#about",
  },
  {
    id: 2,
    label: "Work",
    path: "/#projects",
  },
  {
    id: 3,
    label: "Services",
    path: "/#services",
  },
  {
    id: 4,
    label: "Process",
    path: "/#process",
  },
  {
    id: 5,
    label: "Tools & Store",
    path: "/tools",
  },
];

const Drawer = ({ isSidebarActive, setIsSidebarActive }) => {
  const { cartCount, setIsCartOpen } = useCart();

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
        <Link to={"/"} className="side-logo" onClick={() => setIsSidebarActive(false)}>
          <img src={logo} alt="NEXA STUDIO" />
        </Link>
        <p>
          Website Developer specializing in WordPress, Shopify, Elementor,
          WooCommerce, Divi, and custom website solutions for businesses
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
              <a className="textp" href="mailto:goswamisonu2812@gmail.com">
                goswamisonu2812@gmail.com
              </a>
            </div>
          </div>
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> experience </span>
              <span className="textp"> 5+ Years </span>
            </div>
          </div>
        </div>
        <div className="sub__contact-right mb-40 position-relative">
          <ul className="social">
            {drawerLinks.map(({ id, label, path }) => (
              <li key={id}>
                <HashLink smooth to={path} onClick={() => setIsSidebarActive(false)}>
                  {label}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="d-flex flex-column gap-3">
          <button
            onClick={() => {
              setIsSidebarActive(false);
              setIsCartOpen(true);
            }}
            className="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2"
            style={{
              background: "rgba(201, 243, 29, 0.1)",
              border: "1px solid var(--base)",
              color: "var(--base)",
            }}
          >
            <Bag className="fz-18" />
            <span>View Cart ({cartCount})</span>
          </button>

          <Link
            to={"/contact"}
            onClick={() => setIsSidebarActive(false)}
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
    </div>
  );
};

export default Drawer;
