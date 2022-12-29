import React from "react";
import GovLogo from "../../assets/images/govLogo.svg";
import "./index.scss";

const BannerGov = () => {
  return (
    <a href="https://www.gov.co/">
      <div className="container-banner-gov">
        <img src={GovLogo} alt="" className="img-gov-logo" />
      </div>
    </a>
  );
};

export default BannerGov;
