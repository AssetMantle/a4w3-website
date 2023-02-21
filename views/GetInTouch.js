import React from "react";
import Section from "../components/Section";
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
    <Section
      title={"Get in touch"}
      subTitle={
        "Get in touch through your country’s telegram groups or write to us!"
      }
      subtitleWidth={500}
    >
      <div className="pt-3"></div>
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
                style={{
                  width: "80px",
                  aspectRatio: "1/1",
                  overflow: "hidden",
                }}
              >
                <img
                  src={`/touch/${group.flag}`}
                  alt={`${group.name} flag`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
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
    </Section>
  );
}
