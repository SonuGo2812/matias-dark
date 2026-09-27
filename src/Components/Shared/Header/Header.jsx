import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { List, ArrowRight, Bag } from "react-bootstrap-icons";
import { useCart } from "../../../context/CartContext";

import Drawer from "../Drawer/Drawer";
import logo from "../../../assets/img/logo/nexa-studio-logo.png";

const menuList = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/",
    section: "#about",
    name: "About",
  },
  {
    id: 3,
    path: "/",
    section: "#projects",
    name: "Work",
  },
  {
    id: 4,
    path: "/",
    section: "#services",
    name: "Services",
  },
  {
    id: 5,
    path: "/tools",
    name: "Tools",
  },
  {
    id: 6,
    path: "/",
    section: "#process",
    name: "Process",
  },
  {
    id: 7,
    path: "/portfolio",
    name: "Portfolio",
  },
  {
    id: 8,
    path: "/contact",
    name: "Contact",
  },
];

const Header = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const header = document.querySelector(".header-section");
    if (!header) return;
    const scrollTop = window.scrollY;

    scrollTop >= 35
      ? header.classList.add("menu-fixed", "animated", "fadeInDown")
      : header.classList.remove("menu-fixed");
  };

  const handleHeaderToggle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`header-section `}>
      <div className="container">
        <div className="header-wrapper">
          <div className="main__logo">
            <Link to={"/"} className="logo">
              <img src={logo} alt="NEXA STUDIO" />
            </Link>
          </div>
          <ul className={`main-menu ${menuActive ? "active" : ""}`}>
            {menuList.map(({ id, name, path, section }) => {
              return (
                <li key={id}>
                  <HashLink
                    smooth
                    to={`${path}${section ? section : ""}`}
                    onClick={() => setMenuActive(false)}
                  >
                    {name}
                  </HashLink>
                </li>
              );
            })}
          </ul>
          <div className="menu__components d-flex align-items-center">
            {/* Cart Trigger */}
            <button
              className="nav__cart-btn"
              onClick={() => setIsCartOpen(true)}
              title="View Cart"
              aria-label="View Cart"
            >
              <Bag />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            <Link
              to="/contact"
              className="d-flex fw-500 cmn--btn align-items-center gap-2"
            >
              <span className="get__text">Let&apos;s Talk</span>
              <span>
                <ArrowRight className="fz-20" />
              </span>
            </Link>
            <div
              onClick={handleHeaderToggle}
              className={`header-bar d-lg-none ${menuActive ? "active" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              onClick={() => setIsSidebarActive(true)}
              className="remove__click"
            >
              <List className="icon" />
            </div>
          </div>
        </div>
      </div>
      <Drawer
        isSidebarActive={isSidebarActive}
        setIsSidebarActive={setIsSidebarActive}
      />
    </header>
  );
};

export default Header;
