import React from "react";
import SocialIcons from "../components/SocialIcons";

export default function Footer() {
  return (
    <footer className="container-fluid bg-gray-700">
      <div className="container-xl p-3 pt-4">
        <div className="d-grid footer-grid">
          <div className="d-flex  my-3 my-lg-0">
            <div
              className="position-relative mx-auto mx-sm-0"
              style={{
                width: "min(100%,89px)",
                aspectRatio: "89/47",
                overflow: "hidden",
              }}
            >
              <img
                src="/logo.svg"
                alt="artists4web3 logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center justify-content-sm-end justify-content-lg-start my-3 my-lg-0">
            <p className="caption-2 m-0" style={{ width: "max-content" }}>
              &copy; AsGuard 2022 - All rights reserved
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-center justify-content-sm-start justify-content-lg-end  my-3 my-lg-0">
            <SocialIcons />
          </div>
          <div className="d-flex flex-column flex-sm-row gap-2 align-items-center justify-content-center justify-content-sm-end  my-3 my-lg-0">
            <p className="caption2 my-auto ms-0 ms-sm-3">An Initiative by </p>
            <div
              className="position-relative"
              style={{
                width: "min(98px,100%)",
                aspectRatio: "49/20",
                overflow: "hidden",
              }}
            >
              <img
                src="/mantleLabs-Logo.svg"
                alt="MantleLabs Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
