import React from "react";
import Section from "../components/Section";

export default function VisionMission() {
  const visions = [
    {
      icon: "vision1.png",
      width: 151,
      content: "Leveraging global audiences",
    },
    {
      icon: "vision2.png",
      width: 141,
      content: "Censorship-resistant content",
    },
  ];
  return (
    <Section title={"Vision"}>
      <div className="row  mt-5 pt-4">
        <div className="col-12 col-sm-5 d-flex flex-column gap-4 justify-content-center mb-4 mb-sm-0 pb-5 pb-sm-0">
          <p
            className="h4 m-0"
            style={{ maxWidth: "496px", fontWeight: "300" }}
          >
            Artist4Web3 is meaning to DEMOCRATIZE ART.
          </p>
          <p
            className="h4 m-0"
            style={{ maxWidth: "496px", fontWeight: "300" }}
          >
            Art should have no border. With Web3, artists can leverage global
            audiences and distribute censorship-resistant content .
          </p>
        </div>
        <div className="col-12 col-sm-7 d-flex flex-column flex-md-row align-items-center justify-content-around gap-3">
          {React.Children.toArray(
            visions.map((vision) => (
              <div className="d-flex flex-column" style={{ maxWidth: "294px" }}>
                <div
                  className="position-relative mx-auto mb-5"
                  style={{
                    width: `min(${vision.width}px, 90%)`,
                    aspectRatio: "166/160",
                  }}
                >
                  <img
                    src={`/vision/${vision.icon}`}
                    alt={vision.content}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <p className="text-uppercase text-center body2">
                  {vision.content}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </Section>
  );
}
