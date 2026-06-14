import React from "react";
import { ChevronRight, Clock } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import bsmall1 from "../../assets/img/blog/bsmall1.png";
import bsmall2 from "../../assets/img/blog/bsmall2.png";
import bsmall3 from "../../assets/img/blog/bsmall3.png";

const categoriesList = [
  {
    id: 1,
    category: "WordPress",
  },
  {
    id: 2,
    category: "Shopify",
  },
  {
    id: 3,
    category: "WooCommerce",
  },
  {
    id: 4,
    category: "Elementor",
  },
  {
    id: 5,
    category: "CMS Websites",
  },
];

const recentList = [
  {
    id: 1,
    image: bsmall1,
    date: "May 12, 2026",
    title: "Why businesses need easy-to-manage CMS websites",
  },
  {
    id: 2,
    image: bsmall2,
    date: "April 22, 2026",
    title: "Building conversion-focused WordPress landing pages",
  },
  {
    id: 3,
    image: bsmall3,
    date: "March 18, 2026",
    title: "Shopify and WooCommerce store setup basics",
  },
];
const BlogSidebar = () => {
  return (
    <div className="blog__bright__bar">
      <div className="scope__item mb__cus60">
        <h4 className="scope__title">Search</h4>
        <form
          action="#0"
          className="d-flex align-content-center justify-content-between"
        >
          <input type="text" placeholder="Search" />
          <button type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
      <div className="scope__item mb__cus60 position-relative">
        <h4 className="scope__title">Categories</h4>
        <ul className="category">
          {categoriesList.map(({ id, category }) => (
            <li key={id}>
              <Link
                to="#0"
                className="d-flex align-items-center justify-content-between"
              >
                <span className="fz-18 ptext">{category}</span>
                <span className="arrow">
                  <i>
                    <ChevronRight />
                  </i>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="scope__item mb__cus60">
        <h4 className="scope__title">Recent Post</h4>
        <ul className="recent__post">
          {recentList.map(({ id, title, image, date }) => (
            <li key={id}>
              <Link to="#0" className="recent__innter">
                <img src={image} alt="img" />
                <div className="cont__box">
                  <span className="retitle">{title}</span>
                  <span className="base fz-16 d-flex align-items-center gap-2">
                    <i><Clock /></i>
                    {date}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="scope__item">
        <h4 className="scope__title">Tag</h4>
        <ul className="tags">
          <li>
            <Link>WordPress</Link>
          </li>
          <li>
            <Link>Shopify</Link>
          </li>
          <li>
            <Link>WooCommerce</Link>
          </li>
          <li>
            <Link>Elementor</Link>
          </li>
          <li>
            <Link>Divi</Link>
          </li>
          <li>
            <Link>CMS</Link>
          </li>
          <li>
            <Link>Web Development</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
