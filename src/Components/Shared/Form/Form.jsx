import React, { useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";

const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
  "384f6c8e-fa9f-4499-be2e-734ea0cfa3b6";

const Form = ({ isColTwo }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append(
      "subject",
      `Website project enquiry from ${formData.get("name")}`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully. I will get back to you soon.",
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="replay__box cmn__bg">
      <h3>Send a Message</h3>
      <p>
        Share your website requirement and I will get back to you.
      </p>
      <form id="contact-form" onSubmit={handleSubmit} className="row g-4">
        <input
          type="checkbox"
          name="botcheck"
          className="form__honeypot"
          tabIndex={-1}
          autoComplete="off"
        />
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
        {status && (
          <div className="col-lg-12">
            <p className={`form__status form__status--${status.type}`}>
              {status.message}
            </p>
          </div>
        )}
        <button
          type="submit"
          className="d-flex fw-500 cmn--btn align-items-center gap-2"
          disabled={isSubmitting}
        >
          <span className="get__text">
            {isSubmitting ? "Sending..." : "Submit Message"}
          </span>
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
