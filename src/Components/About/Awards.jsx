import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const awardList = [
  {
    id: 1,
    awardName: "5+ Years of Experience",
    contest: "Website Development",
    year: "2026",
  },
  {
    id: 2,
    awardName: "Multiple Business Websites Delivered",
    contest: "WordPress and CMS Development",
    year: "2024",
  },
  {
    id: 3,
    awardName: "eCommerce Store Development",
    contest: "Shopify and WooCommerce",
    year: "2023",
  },
  {
    id: 4,
    awardName: "Local SEO Landing Pages",
    contest: "Service and City Pages",
    year: "2022",
  },
];
const Awards = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="awoard__section">
      <div className="container">
        <div
          className="award__wraper table-responsive"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <table className="table w-100">
            <tbody>
              <tr>
                <td>
                  <span className="table__title">Achievements</span>
                  <p className="pra mt-3">
                    Multiple business websites, eCommerce stores, landing pages,
                    and CMS-based projects across WordPress, Shopify,
                    WooCommerce, Elementor, Divi, and custom website solutions.
                  </p>
                </td>
                <td className="cusnoe"></td>
                <td className="text-end">
                  <a
                    href="#projects"
                    className="d-flex table__view justify-content-end align-items-center base gap-2"
                  >
                    <span>View My Work</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </td>
              </tr>
              {awardList.map(({ contest, id, year, awardName }) => {
                return (
                  <tr key={id}>
                    <td>{awardName}</td>
                    <td>{contest}</td>
                    <td className="text-end">{year}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Awards;
