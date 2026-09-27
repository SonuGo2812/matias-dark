import React from "react";
import { Link } from "react-router-dom";
import { StarFill, CheckCircleFill, BagPlus, ArrowRight } from "react-bootstrap-icons";
import { useCart } from "../../context/CartContext";

const ToolCard = ({ tool }) => {
  const { addToCart } = useCart();

  return (
    <div className="tool__card" data-aos="fade-up" data-aos-duration="1000">
      {tool.badge && <span className="tool__badge">{tool.badge}</span>}

      <div className="tool__thumb">
        <Link to={`/tools/${tool.slug}`}>
          <img src={tool.bannerImage} alt={tool.name} />
        </Link>
        <span className="tool__category">{tool.category}</span>
      </div>

      <div className="tool__content">
        <div className="tool__rating">
          <StarFill />
          <StarFill />
          <StarFill />
          <StarFill />
          <StarFill />
          <span>
            {tool.rating} ({tool.reviewsCount} reviews)
          </span>
        </div>

        <h3 className="tool__title">
          <Link to={`/tools/${tool.slug}`}>{tool.name}</Link>
        </h3>

        <p className="tool__desc">{tool.tagline || tool.shortDesc}</p>

        {tool.licenseTiers?.[0]?.features && (
          <ul className="tool__meta-features">
            {tool.licenseTiers[0].features.slice(0, 3).map((feat, idx) => (
              <li key={idx}>
                <CheckCircleFill /> {feat}
              </li>
            ))}
          </ul>
        )}

        <div className="tool__footer">
          <div className="tool__price-wrap">
            <span className="price-current">${tool.price}</span>
            {tool.originalPrice && (
              <span className="price-original">${tool.originalPrice}</span>
            )}
          </div>

          <div className="tool__actions">
            <Link to={`/tools/${tool.slug}`} className="btn-view">
              Details <ArrowRight />
            </Link>

            {tool.status === "active" ? (
              <button
                className="btn-cart"
                onClick={() => addToCart(tool, tool.licenseTiers[0])}
                title="Add to Cart"
              >
                <BagPlus /> Buy
              </button>
            ) : (
              <span className="btn-view" style={{ opacity: 0.6, cursor: "default" }}>
                Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
