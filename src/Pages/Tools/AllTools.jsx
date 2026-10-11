import React, { useEffect } from "react";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import ToolCard from "../../Components/Tools/ToolCard";
import { toolsData } from "../../Utlits/toolsData";
import { ShieldCheck, LightningChargeFill, Download, Headset } from "react-bootstrap-icons";

const AllTools = () => {
  useEffect(() => {
    document.title = "Custom Web Tools & Software Store | Nexa Studio - Sonu Goswami";
  }, []);

  return (
    <>
      <PageHeader
        heading={"Custom Web Tools & Software"}
        page="Tools & Store"
      />

      <section className="tools__page-section pb-120">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {toolsData.map((tool) => (
              <div key={tool.id} className="col-lg-6 col-md-6 col-sm-10">
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>

          {/* Value Props & Trust Banner */}
          <div
            className="row g-4 justify-content-center mt-80"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="col-lg-3 col-sm-6">
              <div
                style={{
                  background: "rgba(24, 24, 24, 0.6)",
                  border: "1px solid var(--cusborder)",
                  borderRadius: "16px",
                  padding: "24px",
                  textAlign: "center",
                }}
              >
                <Download style={{ fontSize: "32px", color: "var(--base)", marginBottom: "12px" }} />
                <h5 style={{ color: "#fff", fontSize: "16px", marginBottom: "6px" }}>
                  Instant Download
                </h5>
                <p style={{ color: "var(--pra)", fontSize: "13px", margin: 0 }}>
                  Immediate access to plugin ZIP files & setup documentation.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                style={{
                  background: "rgba(24, 24, 24, 0.6)",
                  border: "1px solid var(--cusborder)",
                  borderRadius: "16px",
                  padding: "24px",
                  textAlign: "center",
                }}
              >
                <ShieldCheck style={{ fontSize: "32px", color: "var(--base)", marginBottom: "12px" }} />
                <h5 style={{ color: "#fff", fontSize: "16px", marginBottom: "6px" }}>
                  Clean & Secure Code
                </h5>
                <p style={{ color: "var(--pra)", fontSize: "13px", margin: 0 }}>
                  Strictly scoped CSS, zero jQuery conflicts, safe rollback architecture.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                style={{
                  background: "rgba(24, 24, 24, 0.6)",
                  border: "1px solid var(--cusborder)",
                  borderRadius: "16px",
                  padding: "24px",
                  textAlign: "center",
                }}
              >
                <LightningChargeFill style={{ fontSize: "32px", color: "var(--base)", marginBottom: "12px" }} />
                <h5 style={{ color: "#fff", fontSize: "16px", marginBottom: "6px" }}>
                  Ultra-Fast Response Engine
                </h5>
                <p style={{ color: "var(--pra)", fontSize: "13px", margin: 0 }}>
                  Sub-1.5s real-time streaming with strict anti-hallucination guardrails.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                style={{
                  background: "rgba(24, 24, 24, 0.6)",
                  border: "1px solid var(--cusborder)",
                  borderRadius: "16px",
                  padding: "24px",
                  textAlign: "center",
                }}
              >
                <Headset style={{ fontSize: "32px", color: "var(--base)", marginBottom: "12px" }} />
                <h5 style={{ color: "#fff", fontSize: "16px", marginBottom: "6px" }}>
                  Direct Developer Support
                </h5>
                <p style={{ color: "var(--pra)", fontSize: "13px", margin: 0 }}>
                  Personal 1-on-1 assistance via WhatsApp & email for installation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllTools;
