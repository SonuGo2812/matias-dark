import React, { useState, useEffect } from "react";
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
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" | "yearly"
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(tool.gallery?.[0]?.url || tool.bannerImage);
    setSelectedTier(tool.licenseTiers[0]);
    setBillingCycle("monthly");
    document.title = `${tool.name} | Nexa Studio`;
  }, [id, tool]);

  const isYearly = billingCycle === "yearly" && selectedTier.yearlyPrice;
  const currentPrice = isYearly ? selectedTier.yearlyPrice : selectedTier.price;
  const currentBillingLabel = isYearly ? "/ year" : "/ month";
  const currentPriceShort = isYearly
    ? `${currentPrice.toLocaleString()}/yr`
    : `${currentPrice.toLocaleString()}/mo`;

  const handleWhatsAppInstantBuy = () => {
    const curr = tool.currency || "₹";
    const cycleText = isYearly ? "Yearly Plan (2 Months Free)" : "Monthly Plan";
    const priceText = isYearly
      ? `${curr}${selectedTier.yearlyPrice.toLocaleString()} / year`
      : `${curr}${selectedTier.price.toLocaleString()} / month`;
    const text = `*Inquiry / Subscription for ${tool.name}*%0A%0A- Selected Plan: *${selectedTier.name} (${cycleText})*%0A- Price: *${priceText}*%0A%0APlease share the activation details and payment link.`;
    window.open(`https://wa.me/919610342763?text=${text}`, "_blank");
  };

  const handleAddToCart = () => {
    const tierForCart = {
      ...selectedTier,
      tierName: isYearly
        ? `${selectedTier.name} (Yearly - 2 Months Free)`
        : `${selectedTier.name} (Monthly)`,
      price: currentPrice,
    };
    addToCart(tool, tierForCart);
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
                    {tool.featuresHeading || `Why ${tool.shortName} is Superior`}
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

              {/* Summary Pricing Table (User Specification) */}
              {tool.summaryTable && (
                <div
                  style={{
                    background: "rgba(24, 24, 24, 0.7)",
                    border: "1px solid var(--cusborder)",
                    borderRadius: "16px",
                    padding: "26px",
                    marginTop: "30px",
                  }}
                  data-aos="fade-up"
                >
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: "20px",
                      marginBottom: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Summary Table:
                  </h3>

                  <div style={{ overflowX: "auto" }}>
                    <table
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: "14px",
                        color: "#fff",
                        textAlign: "left",
                        background: "#111418",
                        borderRadius: "10px",
                        overflow: "hidden",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      <thead>
                        <tr
                          style={{
                            background: "#181e26",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <th style={{ padding: "14px 18px", color: "#f1f5f9", fontWeight: "600" }}>
                            Plan Name
                          </th>
                          <th style={{ padding: "14px 18px", color: "#f1f5f9", fontWeight: "600" }}>
                            Number of Sites
                          </th>
                          <th style={{ padding: "14px 18px", color: "#f1f5f9", fontWeight: "600" }}>
                            Monthly Price
                          </th>
                          <th
                            style={{
                              padding: "14px 18px",
                              color: "var(--base)",
                              fontWeight: "600",
                            }}
                          >
                            Yearly Price (2 Months Free)
                          </th>
                          <th style={{ padding: "14px 18px", color: "#f1f5f9", fontWeight: "600" }}>
                            Price Per Site
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tool.summaryTable.map((row, idx) => (
                          <tr
                            key={idx}
                            style={{
                              borderBottom:
                                idx === tool.summaryTable.length - 1
                                  ? "none"
                                  : "1px solid rgba(255, 255, 255, 0.05)",
                              background:
                                idx % 2 === 0
                                  ? "transparent"
                                  : "rgba(255, 255, 255, 0.02)",
                            }}
                          >
                            <td
                              style={{
                                padding: "14px 18px",
                                fontWeight: "600",
                                color: "#fff",
                              }}
                            >
                              {row.planName}
                            </td>
                            <td style={{ padding: "14px 18px", color: "#cbd5e1" }}>
                              {row.sites}
                            </td>
                            <td
                              style={{
                                padding: "14px 18px",
                                fontWeight: "600",
                                color: "#fff",
                              }}
                            >
                              {row.monthlyPrice}
                            </td>
                            <td
                              style={{
                                padding: "14px 18px",
                                fontWeight: "600",
                                color: "var(--base)",
                              }}
                            >
                              {row.yearlyPrice}
                            </td>
                            <td style={{ padding: "14px 18px", color: "#94a3b8" }}>
                              {row.pricePerSite}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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

                {/* Monthly / Yearly Billing Toggle */}
                {tool.licenseTiers.some((t) => t.yearlyPrice) && (
                  <div
                    style={{
                      display: "flex",
                      background: "rgba(255, 255, 255, 0.04)",
                      borderRadius: "10px",
                      padding: "4px",
                      marginBottom: "20px",
                      border: "1px solid var(--cusborder)",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setBillingCycle("monthly")}
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        borderRadius: "8px",
                        fontSize: "13px",
                        fontWeight: "600",
                        border: "none",
                        cursor: "pointer",
                        background: billingCycle === "monthly" ? "var(--base)" : "transparent",
                        color: billingCycle === "monthly" ? "#000" : "var(--pra)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Monthly Billing
                    </button>
                    <button
                      type="button"
                      onClick={() => setBillingCycle("yearly")}
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        borderRadius: "8px",
                        fontSize: "13px",
                        fontWeight: "600",
                        border: "none",
                        cursor: "pointer",
                        background: billingCycle === "yearly" ? "var(--base)" : "transparent",
                        color: billingCycle === "yearly" ? "#000" : "var(--pra)",
                        transition: "all 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                      }}
                    >
                      <span>Yearly Billing</span>
                      <span
                        style={{
                          fontSize: "11px",
                          background: billingCycle === "yearly" ? "#000" : "rgba(201, 243, 29, 0.2)",
                          color: billingCycle === "yearly" ? "var(--base)" : "var(--base)",
                          padding: "2px 6px",
                          borderRadius: "4px",
                          fontWeight: "700",
                        }}
                      >
                        2 Mo. Free
                      </span>
                    </button>
                  </div>
                )}

                <div className="buy__pricing-block">
                  <span className="current-p">
                    {tool.currency || "₹"}{currentPrice.toLocaleString()}
                    <span style={{ fontSize: "16px", fontWeight: "normal", color: "var(--pra)", marginLeft: "4px" }}>
                      {currentBillingLabel}
                    </span>
                  </span>
                  {isYearly ? (
                    <span className="save-badge">2 MONTHS FREE</span>
                  ) : (
                    selectedTier.discount && (
                      <span className="save-badge">{selectedTier.discount}</span>
                    )
                  )}
                </div>

                {/* License Picker */}
                <div className="license__picker">
                  <label>Select Plan ({isYearly ? "Annual Billing" : "Monthly Billing"}):</label>
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
                      <span className="tier-price">
                        {tool.currency || "₹"}
                        {isYearly && tier.yearlyPrice
                          ? `${tier.yearlyPrice.toLocaleString()} / yr`
                          : `${tier.price.toLocaleString()} / mo`}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Buy Action Buttons */}
                <div className="buy__ctas">
                  <button
                    className="btn-add-cart"
                    onClick={handleAddToCart}
                  >
                    <BagCheck className="fz-20" /> Add to Cart ({tool.currency || "₹"}{currentPriceShort})
                  </button>

                  <button
                    className="btn-direct-buy"
                    onClick={handleWhatsAppInstantBuy}
                  >
                    <Whatsapp className="fz-18" /> Subscribe via WhatsApp
                  </button>
                </div>

                {/* Guarantees */}
                <ul className="trust__guarantees">
                  <li>
                    <Download /> Instant .ZIP Plugin Download & Setup
                  </li>
                  <li>
                    <ShieldCheck /> 100% Virus-Free & Production Tested
                  </li>
                  <li>
                    <LightningChargeFill /> Continuous Monthly Updates & Direct Support
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
