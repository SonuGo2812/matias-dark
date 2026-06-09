import React from "react";
import { ArrowRight } from "react-bootstrap-icons";

const Form = ({ isColTwo }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Website project enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:sonu998999@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="replay__box cmn__bg">
      <h3>Send a Message</h3>
      <p>
        Share your website requirement and I will get back to you.
      </p>
      <form onSubmit={handleSubmit} className="row g-4">
        <div className={` ${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <input type="text" name="name" placeholder="Name" required />
        </div>
        <div className={` ${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="col-lg-12">
          <textarea
            name="message"
            rows="5"
            placeholder="Write Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="d-flex fw-500 cmn--btn align-items-center gap-2"
        >
          <span className="get__text">Submit Message</span>
          <span>
            <i className=" fz-20">
              {" "}
              <ArrowRight />{" "}
            </i>
          </span>
        </button>
      </form>
    </div>
  );
};

export default Form;
