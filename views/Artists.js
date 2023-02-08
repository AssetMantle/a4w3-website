import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Artists() {
  const ARTISTS = [
    {
      art: "https://images.unsplash.com/photo-1499228388171-1b10538a4f73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      name: "Artist’s Name",
      handle: "@artistshandle",
      url: "",
    },
    {
      art: "https://images.unsplash.com/photo-1499228388171-1b10538a4f73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      name: "Artist’s Name",
      handle: "@artistshandle",
      url: "",
    },
    {
      art: "https://images.unsplash.com/photo-1499228388171-1b10538a4f73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      name: "Artist’s Name",
      handle: "@artistshandle",
      url: "",
    },
    {
      art: "https://images.unsplash.com/photo-1499228388171-1b10538a4f73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      name: "Artist’s Name",
      handle: "@artistshandle",
      url: "",
    },
  ];
  return (
    <section className="container-xxl py-5 my-5 px-3">
      <h1 className="h1 text-uppercase text-center">The artists</h1>
      <p
        className="body1 text-center mx-auto my-3"
        style={{ maxWidth: "880px" }}
      >
        Glimpse through the vivid, soulful stories of artists across this
        community, their triumphs and travails
      </p>
      <div className="pt-4">
        <Splide
          options={{
            type: "loop",
            perMove: 1,
            trimSpace: false,
            pagination: false,
            arrowPath:
              "M.44.565a1.118 1.118 0 0 1 1.596 0l13.55 13.742a1.157 1.157 0 0 1 0 1.62L2.035 29.667a1.118 1.118 0 0 1-1.597 0 1.157 1.157 0 0 1 0-1.62L13.19 15.118.44 2.184a1.157 1.157 0 0 1 0-1.62Z",
            perPage: 4,
            breakpoints: {
              900: {
                perPage: 2,
              },
              600: {
                perPage: 1,
              },
            },
          }}
        >
          {React.Children.toArray(
            ARTISTS.map((artist, index) => (
              <SplideSlide>
                <div
                  className={`d-flex ${
                    (index + 1) % 2 === 0 ? "pt-0 pt-sm-6" : "pb-0 pb-sm-6"
                  }`}
                  style={{ cursor: "pointer" }}
                  role="button"
                  tabIndex="0"
                  onClick={() => window.open(artist.url, "_blank")}
                >
                  <div
                    className="d-flex flex-column gap-4 p-4 rounded-4 mx-auto bg-gray-700"
                    style={{ width: "min(288px,90%)" }}
                  >
                    <div
                      className="position-relative rounded-4"
                      style={{
                        width: "min(240px,100%)",
                        aspectRatio: "1/1",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={artist.art}
                        alt={artist.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="position-relative rounded-circle"
                        style={{
                          width: "min(60px,100%)",
                          aspectRatio: "1/1",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={artist.avatar}
                          alt={artist.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                        />
                      </div>
                      <div className="d-flex gap-2 flex-column justify-contents-center">
                        <h5 className="body2 m-0">{artist.name}</h5>
                        <p className="caption m-0">{artist.handle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))
          )}
        </Splide>
      </div>
    </section>
  );
}
