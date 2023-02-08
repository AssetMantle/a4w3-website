import React from "react";
import Event from "../components/Event";

export default function Events() {
  const EVENTS = [
    {
      date: "31-12-2022",
      name: "Event Name",
      place: "Event Place",
      description:
        "Event Description. AssetMantle suite of products creates a distributed NFT Economy where users can create not only NFT.",
      link: "",
      completed: true,
    },
    {
      date: "31-12-2022",
      name: "Event Name",
      place: "Event Place",
      description:
        "Event Description. AssetMantle suite of products creates a distributed NFT Economy where users can create not only NFT.",
      link: "",
      completed: true,
    },
  ];
  return (
    <section className="container-xl py-5 my-5 px-3">
      <h1 className="h1 text-uppercase text-center">Events</h1>
      <div className="d-flex flex-column align-items-center justify-content-center gap-3 mt-5 pt-5">
        {React.Children.toArray(EVENTS.map((event) => <Event data={event} />))}
      </div>
    </section>
  );
}
