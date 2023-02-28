import React from "react";
import SocialIcons from "../components/SocialIcons";

export default function Hero() {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center aw-am-hero py-3">
      {/* <div
        className="position-relative"
        style={{
          aspectRatio: "725/384",
          width: "min(625px, 90%)",
          overflow: "hidden",
        }}
      > */}
      {/* <img
          src="/hero/hero-logo.svg"
          alt="Artists4web3 logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        /> */}
      {/* </div> */}
      <div className="d-flex align-items-center justify-content-center flex-wrap bg-translucent p-3 gap-3 w-100 mt-5">
        <a
          href="https://www.notion.so/amcontributor/AssetMantle-s-Contributor-Program-422df49c031f4661a4bc9f31197af8f4"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary d-flex align-items-center gap-2 py-2 px-3 caption"
        >
          Artists4Web3 Program <i className="bi bi-arrow-up-right"></i>
        </a>
        <a
          href="https://t.me/Artist4Web3"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary d-flex align-items-center gap-2 py-2 px-3 caption"
        >
          Join Country group <i className="bi bi-chevron-right"></i>
        </a>
      </div>
      <div className="bg-translucent p-3 px-5 mt-4 rounded-5">
        <SocialIcons />
      </div>
    </section>
  );
}
