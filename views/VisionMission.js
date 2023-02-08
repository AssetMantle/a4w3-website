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
      <h1 className="text-uppercase text-center">Vision & Mission</h1>
      <p
        className="text-center subtitle2 mx-auto pt-2"
        style={{ maxWidth: "450px" }}
      >
        The vision is to democartise art. Art should have no border. Web3
        enables:
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
