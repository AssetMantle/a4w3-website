import Image from "next/image";
import React from "react";

export default function VisionMission() {
  const visions = [
    {
      icon: "vision1.svg",
      content: "Leveraging global audiences",
    },
    {
      icon: "vision2.svg",
      content: "Censorship-resistant content",
    },
  ];
  return (
    <section className="container-xl py-5 my-5 px-3">
      <h1 className="h1 text-uppercase text-center">Vision</h1>
      <p
        className="body1 text-center mx-auto my-3"
        style={{ maxWidth: "880px" }}
      >
        Artist4Web3 is meaning to DEMOCRATIZE ART. Art should have no border.
        With Web3 artist can leveraging global audiences and distribute
        Censorship-resistant content.
      </p>
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-around gap-3 mt-5 pt-4">
        {React.Children.toArray(
          visions.map((vision) => (
            <div className="d-flex flex-column" style={{ maxWidth: "294px" }}>
              <div
                className="position-relative mx-auto mb-5"
                style={{ width: "min(166px, 90%)", aspectRatio: "166/160" }}
              >
                <Image
                  layout="fill"
                  src={`/vision/${vision.icon}`}
                  alt={vision.content}
                />
              </div>
              <p className="text-uppercase text-center body2 text-primary">
                {vision.content}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
