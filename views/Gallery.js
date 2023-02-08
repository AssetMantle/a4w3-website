import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Gallery() {
  const Images = [
    {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: "1",
    },
    {
      src: "https://images.unsplash.com/photo-1520881363902-a0ff4e722963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: "2",
    },
    {
      src: "https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      alt: "3",
    },
  ];
  return (
    <section
      className="py-5 my-5 mx-auto"
      style={{ width: "min(1440px,100%)" }}
    >
      <h1 className="h1 px-3 text-uppercase text-center pb-4">GaLLERY</h1>
      <div className="pt-5">
        <Splide
          options={{
            type: "loop",
            padding: "20%",
            width: "100%",
            arrows: false,
            pagination: false,
            autoplay: true,
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
    </section>
  );
}
