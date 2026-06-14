import React from "react";
import Marquee from "react-fast-marquee";
import { marqueeStar } from "../../../Utlits/marqueeItems";

const MarqueeWapper = ({ images, labels, direction }) => {
  return (
    <div className="marquee-wrapper text-slider">
      <div className="marquee-inner ">
        <Marquee direction={direction}>
          {labels
            ? labels.map((label) => (
                <span key={label} className="marquee-text-item">
                  <img
                    src={marqueeStar}
                    alt=""
                    className="marquee-text-star"
                  />
                  {label}
                </span>
              ))
            : images?.map(({ id, image }) => (
                <img key={id} src={image} alt="" />
              ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeWapper;
