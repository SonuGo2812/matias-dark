import React from "react";
import { Link, ScrollRestoration } from "react-router-dom";

import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import BlogSidebar from "../../Components/Blogs/BlogSidebar";

import bblog1 from "../../assets/img/blog/bblog1.png";
import blogDetailsb2 from "../../assets/img/blog/blog-detailsb2.png";
import straightQuotes from "../../assets/img/blog/straight-quotes.png";
import Form from "../../Components/Shared/Form/Form";
import { socialIcons } from "../../Utlits/socilIcons";

const BlogDetails = () => {

  return (
    <>
      <PageHeader
        heading={"Why CMS Websites Still Work for Businesses"}
        page={"CMS Website Development"}
      />
      <section className="blog__bsection pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="blog__bleft__wrapper">
                <div
                  className="blog__bitem"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Link to="" className="thumb">
                    <img src={bblog1} alt="img" />
                  </Link>
                  <div className="content__two">
                    <div
                      className="text__box mb-30"
                      data-aos="fade-up"
                      data-aos-duration="1400"
                    >
                      <span className="text__de">
                        By: Sonu Goswami / Website Development / Posted on 2026 /
                        Comments: 0
                      </span>
                      <p className="fz-16 pra ttext__one">
                        A good CMS website gives businesses control over their
                        pages, services, products, and content without needing a
                        developer for every small update. WordPress, Shopify,
                        WooCommerce, Elementor, and Divi are still strong
                        choices when they are planned and built properly.
                      </p>
                      <p className="fz-16 pra">
                        The most important part is not only the platform. The
                        website needs clear structure, responsive sections,
                        fast-loading pages, SEO-friendly content, and simple
                        navigation so visitors can quickly understand the
                        business and take action.
                      </p>
                    </div>
                    <div className="quite__box mb-30">
                      <img src={straightQuotes} alt="img" />
                      <p>
                        A website should look professional, load smoothly, and
                        stay easy for the business owner to manage after launch.
                      </p>
                      <Link to="">Sonu Goswami</Link>
                    </div>
                    <p className="fz-16 pra ttext__one mb__cus60">
                      For service businesses, local pages, eCommerce stores, and
                      company websites, a CMS setup can save time and keep
                      content organized. With the right layout and development
                      approach, it becomes easier to scale pages, add services,
                      manage products, and improve user experience.
                    </p>
                    <h3 className="white mb-30">
                      A clean website should be easy to manage
                    </h3>
                    <div className="thumb mb-30">
                      <img src={blogDetailsb2} alt="img" />
                    </div>
                    <p className="fz-16 pra ttext__one mb-30">
                      I focus on building websites that balance design,
                      performance, and content management. That means clean
                      sections, reusable layouts, optimized images, clear calls
                      to action, and CMS fields that make future updates easier.
                    </p>
                    <div
                      className="text__box mb-30"
                      data-aos="fade-up"
                      data-aos-duration="1600"
                    >
                      <ul className="challenge__list">
                        <li>
                          Use WordPress, Shopify, Elementor, WooCommerce, and Divi
                          where they fit the business need.
                        </li>
                        <li>
                          Build responsive layouts that work smoothly on mobile,
                          tablet, and desktop screens.
                        </li>
                        <li>
                          Keep the content structure SEO-friendly and easy to
                          update after launch.
                        </li>
                      </ul>
                    </div>
                    <p className="fz-16 pra ttext__one mb-30">
                      A CMS website works best when design, content, and
                      development are planned together. This creates a website
                      that is useful for visitors and practical for the business
                      owner.
                    </p>
                  </div>
                  <div className="post__in cmn__bg mb__cus60">
                    <div className="post__left">
                      <span className="fz-20 fw-500 white">Posted in :</span>
                      <Link to="">WordPress</Link>
                      <Link to="">CMS Websites</Link>
                    </div>
                    <div className="post__right">
                      <span className="fz-20 fw-500 white">Share :</span>
                      <ul className="social-cus d-flex align-items-center">
                        {socialIcons.map(({id, icon}) => (
                          <li key={id}>
                            <Link to="">
                              <i>
                                {icon}
                              </i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Form isColTwo={true} />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default BlogDetails;
