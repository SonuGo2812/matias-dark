import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toolsData } from "../../Utlits/toolsData";
import { useCart } from "../../context/CartContext";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import {
  StarFill,
  CheckCircleFill,
  BagCheck,
  Whatsapp,
  ShieldCheck,
  LightningChargeFill,
  Download,
  ChevronDown,
  ChevronUp,
} from "react-bootstrap-icons";

const ToolDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Find tool by slug or default to Chat Pilot
  const tool = toolsData.find((t) => t.slug === id || t.id === id) || toolsData[0];

  const [activeImage, setActiveImage] = useState(
    tool.gallery?.[0]?.url || tool.bannerImage
  );
  const [selectedTier, setSelectedTier] = useState(tool.licenseTiers[0]);
  const [openFaq, setOpenFaq] = useState(0);

  const handleWhatsAppInstantBuy = () => {
    const text = `*Inquiry / Instant Buy for ${tool.name}*%0A%0A- Selected License: *${selectedTier.name}*%0A- Price: *$${selectedTier.price}*%0A%0APlease share the payment link and instant download details.`;
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <>
      <PageHeader heading={tool.name} page={`Tools / ${tool.shortName}`} />

      <section className="product__details-wrap pb-120">
        <div className="container">
          <div className="row g-4">
            {/* Left Column: Visual Gallery, Deep Dive & Features */}
            <div className="col-lg-8">
              {/* Media Gallery */}
              <div className="product__gallery mb-40" data-aos="fade-up">
                <div className="main-preview">
                  <img src={activeImage} alt={tool.name} />
                </div>

                {tool.gallery && tool.gallery.length > 0 && (
                  <div className="thumbs-row">
                    {tool.gallery.map((img) => (
                      <div
                        key={img.id}
                        className={`thumb-item ${activeImage === img.url ? "active" : ""}`}
                        onClick={() => setActiveImage(img.url)}
                      >
                        <img src={img.url} alt={img.title} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Overview */}
              <div
                style={{
                  background: "rgba(24, 24, 24, 0.7)",
                  border: "1px solid var(--cusborder)",
                  borderRadius: "16px",
                  padding: "30px",
                  marginBottom: "30px",
                }}
                data-aos="fade-up"
              >
                <h3 style={{ color: "#fff", fontSize: "22px", marginBottom: "16px" }}>
                  Product Overview
                </h3>
                <p style={{ color: "var(--pra)", fontSize: "15px", lineHeight: "1.8", margin: 0 }}>
                  {tool.overview}
                </p>
              </div>

              {/* Key Features */}
              {tool.keyFeatures && (
                <div
                  style={{
                    background: "rgba(24, 24, 24, 0.7)",
                    border: "1px solid var(--cusborder)",
                    borderRadius: "16px",
                    padding: "30px",
                    marginBottom: "30px",
                  }}
                  data-aos="fade-up"
                >
                  <h3 style={{ color: "#fff", fontSize: "22px", marginBottom: "20px" }}>
                    Why Chat Pilot is Superior
                  </h3>

                  <div className="row g-3">
                    {tool.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="col-md-6">
                        <div
                          style={{
                            background: "rgba(255, 255, 255, 0.02)",
                            border: "1px solid rgba(255, 255, 255, 0.05)",
                            borderRadius: "12px",
                            padding: "18px",
                            height: "100%",
                          }}
                        >
                          <h5
                            style={{
                              color: "var(--base)",
                              fontSize: "15px",
                              marginBottom: "8px",
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            {feat.title}
                          </h5>
                          <p style={{ color: "var(--pra)", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What's Included */}
              {tool.whatsIncluded && (
                <div
                  style={{
                    background: "rgba(24, 24, 24, 0.7)",
                    border: "1px solid var(--cusborder)",
                    borderRadius: "16px",
                    padding: "30px",
                    marginBottom: "30px",
                  }}
                  data-aos="fade-up"
                >
                  <h3 style={{ color: "#fff", fontSize: "22px", marginBottom: "16px" }}>
                    What&apos;s Included in Your Download
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {tool.whatsIncluded.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          color: "#e2e8f0",
                          fontSize: "14px",
                          marginBottom: "12px",
                        }}
                      >
                        <CheckCircleFill style={{ color: "var(--base)", flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Specifications */}
              {tool.techSpecs && (
                <div className="product__specs-card" data-aos="fade-up">
                  <h4>Technical Specifications & Compatibility</h4>
                  {tool.techSpecs.map((spec, idx) => (
                    <div key={idx} className="spec-item">
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-val">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* FAQ Section */}
              {tool.faqs && (
                <div
                  style={{
                    background: "rgba(24, 24, 24, 0.7)",
                    border: "1px solid var(--cusborder)",
                    borderRadius: "16px",
                    padding: "30px",
                    marginTop: "30px",
                  }}
                  data-aos="fade-up"
                >
                  <h3 style={{ color: "#fff", fontSize: "22px", marginBottom: "20px" }}>
                    Frequently Asked Questions
                  </h3>

                  {tool.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      style={{
                        borderBottom: "1px solid var(--cusborder)",
                        paddingBottom: "14px",
                        marginBottom: "14px",
                      }}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#fff",
                          fontSize: "15px",
                          fontWeight: "600",
                          textAlign: "left",
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          cursor: "pointer",
                          padding: "6px 0",
                        }}
                      >
                        <span>{faq.q}</span>
                        {openFaq === idx ? (
                          <ChevronUp style={{ color: "var(--base)" }} />
                        ) : (
                          <ChevronDown style={{ color: "var(--pra)" }} />
                        )}
                      </button>

                      {openFaq === idx && (
                        <p
                          style={{
                            color: "var(--pra)",
                            fontSize: "14px",
                            lineHeight: "1.7",
                            marginTop: "8px",
                            marginBottom: 0,
                          }}
                        >
                          {faq.a}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Sticky E-Commerce Purchase Box */}
            <div className="col-lg-4">
              <div className="product__buy-card" data-aos="fade-left">
                <span className="buy__badge">{tool.badge || "Verified Tool"}</span>
                <h1 className="buy__title">{tool.name}</h1>

                <div className="buy__rating">
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <StarFill />
                  <span>
                    {tool.rating} ({tool.reviewsCount} verified reviews)
                  </span>
                </div>

                <div className="buy__pricing-block">
                  <span className="current-p">${selectedTier.price}</span>
                  {selectedTier.originalPrice && (
                    <span className="original-p">${selectedTier.originalPrice}</span>
                  )}
                  {selectedTier.discount && (
                    <span className="save-badge">{selectedTier.discount}</span>
                  )}
                </div>

                {/* License Picker */}
                <div className="license__picker">
                  <label>Select License Tier:</label>
                  {tool.licenseTiers.map((tier) => (
                    <div
                      key={tier.id}
                      className={`tier-option ${selectedTier.id === tier.id ? "selected" : ""}`}
                      onClick={() => setSelectedTier(tier)}
                    >
                      <div className="tier-info">
                        <span className="tier-name">{tier.name}</span>
                        <span className="tier-desc">{tier.desc}</span>
                      </div>
                      <span className="tier-price">${tier.price}</span>
                    </div>
                  ))}
                </div>

                {/* Buy Action Buttons */}
                <div className="buy__ctas">
                  <button
                    className="btn-add-cart"
                    onClick={() => addToCart(tool, selectedTier)}
                  >
                    <BagCheck className="fz-20" /> Add to Cart (${selectedTier.price})
                  </button>

                  <button
                    className="btn-direct-buy"
                    onClick={handleWhatsAppInstantBuy}
                  >
                    <Whatsapp className="fz-18" /> Instant Buy via WhatsApp
                  </button>
                </div>

                {/* Guarantees */}
                <ul className="trust__guarantees">
                  <li>
                    <Download /> Instant .ZIP Plugin Download
                  </li>
                  <li>
                    <ShieldCheck /> 100% Virus-Free & Production Tested
                  </li>
                  <li>
                    <LightningChargeFill /> Lifetime / 1-Year Free Updates Included
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolDetails;
