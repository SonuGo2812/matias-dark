import React from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Form = ({ isColTwo }) => {
  return (
    <div className="replay__box cmn__bg">
      <h3>Send a Message</h3>
      <p>
        Share your website requirement and I will get back to you.
      </p>
      <form action="#" className="row g-4">
        <div className={` ${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <input type="text" placeholder="Name" />
        </div>
        <div className={` ${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <input type="email" placeholder="Email" />
        </div>
        <div className="col-lg-12">
          <textarea
            name="comment"
            rows="5"
            placeholder="Write Message"
          ></textarea>
        </div>
        <Link
          to={""}
          className="d-flex fw-500 cmn--btn align-items-center gap-2"
        >
          <span className="get__text">Submit Message</span>
          <span>
            <i className=" fz-20">
              {" "}
              <ArrowRight />{" "}
            </i>
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Form;
