import React from "react";
import logo from "../../../assets/img/logo/nexa-studio-logo.png";

const Preloader = () => {
  return (
    <div className="preloader__matias">
      <div className="box text-center">
        <div className="matias mb-10">
          <img src={logo} alt="NEXA STUDIO" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
