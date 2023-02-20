import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Section from "../components/Section";

export default function Gallery() {
  const Images = [
    {
      src: "/gallery/gallery1.png",
      alt: "1",
    },
    {
      src: "/gallery/gallery2.png",
      alt: "2",
    },
    {
      src: "/gallery/gallery3.png",
      alt: "3",
    },
  ];
  return (
    <Section title={"Gallery"} fullW={true} px={"0"}>
      <div className="pt-5">
        <Splide
          options={{
            type: "loop",
            padding: "21%",
            width: "100%",
            arrows: false,
            pagination: false,
            autoplay: true,
            pauseOnHover: false,
            speed: 800,
          }}
        >
          {React.Children.toArray(
            Images.map((image) => (
              <SplideSlide>
                <div
                  className="position-relative"
                  style={{
                    width: "min(858px,100%)",
                    aspectRatio: "3/2",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              </SplideSlide>
            ))
          )}
        </Splide>
        <div className="position-relative"></div>
      </div>
    </Section>
  );
}
