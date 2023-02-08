import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import SocialIcons from "../components/SocialIcons";

export default function Footer() {
  return (
    <footer className="container-fluid bg-gray-700">
      <div className="container-xl p-3 pt-4">
        <Row>
          <Col
            className="d-flex flex-column flex-sm-row align-items-center gap-4"
            style={{ width: "max-content" }}
          >
            <div
              className="position-relative"
              style={{ width: "min(89px,100%)", aspectRatio: "89/47" }}
            >
              <Image layout="fill" src="/logo.svg" alt="artists4web3 logo" />
            </div>
            <p className="caption-2 my-auto" style={{ width: "max-content" }}>
              &copy; AsGuard 2022 - All rights reserved
            </p>
          </Col>
          <Col className="d-flex flex-column flex-sm-row gap-2 align-items-center justify-content-center justify-content-sm-end mt-4 mt-sm-0 ms-auto">
            <SocialIcons />
            <p className="caption2 my-auto ms-0 ms-sm-3">An Initiative by </p>
            <div
              className="position-relative"
              style={{ width: "min(98px,100%)", aspectRatio: "49/20" }}
            >
              <Image
                layout="fill"
                src="/mantleLabs-Logo.svg"
                alt="MantleLabs Logo"
              />
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
}
