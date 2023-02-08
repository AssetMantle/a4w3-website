import Image from "next/image";
import React from "react";
import SocialIcons from "../components/SocialIcons";

export default function GetInTouch() {
  const groups = [
    {
      flag: "india.svg",
      name: "India",
      link: "https://t.me/Artist4Web3India",
    },
    {
      flag: "usa.svg",
      name: "USA",
      link: "https://t.me/Artist4Web3USA",
    },
    {
      flag: "philippines.svg",
      name: "Philippines",
      link: "https://t.me/Artist4Web3PH",
    },
  ];
  return (
    <section className="container-xl py-5 my-5 px-3">
      <h1 className="h1 text-uppercase text-center">Get in touch</h1>
      <p className="body2 text-center">
        Get in touch through your country’s telegram groups or write to us!
      </p>
      <SocialIcons />
      <div
        className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-between gap-3 mt-5 pt-4 mx-auto"
        style={{ maxWidth: "1016px" }}
      >
        {React.Children.toArray(
          groups.map((group) => (
            <div className="d-flex gap-4 align-items-center">
              <div
                className="position-relative rounded-circle"
                style={{ width: "80px", aspectRatio: "1/1" }}
              >
                <Image layout="fill" src={`/touch/${group.flag}`} />
              </div>
              <div className="d-flex flex-column align-items-start">
                <h3 className="h3 text-uppercase">{group.name}</h3>
                <a
                  href={group.link}
                  target="_blank"
                  rel="noreferrer"
                  className="am-link no-underline"
                >
                  Join Telegram <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
