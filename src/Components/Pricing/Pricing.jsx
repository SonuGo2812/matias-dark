import React from "react";
import basic from "../../assets/img/project/basic.png";
import warranty from "../../assets/img/project/warranty.png";
import premium from "../../assets/img/project/premium-quality.png";
import Price from "./Price";
import Title from "../Shared/Title/Title";
const planData = [
  {
    id: 1,
    planName: "Starter Website",
    price: "Custom",
    time: "project",
    fetcher: [
      " WordPress setup",
      " Responsive pages",
      "Elementor sections",
      "Basic SEO structure",
      "Launch support",
    ],
    image: basic,
  },
  {
    id: 2,
    planName: "Business Website",
    price: "Custom",
    time: "project",
    fetcher: [
      " CMS development",
      " Service page layouts",
      "ACF dynamic content",
      "Performance basics",
      "Content management",
    ],
    image: warranty,
  },
  {
    id: 3,
    planName: "eCommerce Website",
    price: "Custom",
    time: "project",
    fetcher: [
      " Shopify setup",
      " WooCommerce setup",
      "Product pages",
      "Payment-ready structure",
      "Store launch support",
    ],
    image: premium,
  },
];
const Pricing = () => {
  return (
    <section className="pricing__section pt-120 pb-120">
      <div className="container">
        <Title
          mainTitle={"Flexible website solutions for your business"}
          sortTitle={"Website Packages"}
        />
        <div className="row g-4 justify-content-center">
          {planData.map(({ id, image, planName, fetcher, price, time }) => (
            <Price
              key={id}
              image={image}
              planName={planName}
              price={price}
              time={time}
              fetcher={fetcher}
              id={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
