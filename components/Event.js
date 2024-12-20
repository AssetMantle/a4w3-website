import React from "react";

export default function Event({ data }) {
  const EDateA = data && data.date && data.date.split("-");
  const MONTHs = {
    1: "JAN",
    2: "FEB",
    3: "MAR",
    4: "APR",
    5: "MAY",
    6: "JUN",
    7: "JUL",
    8: "AUG",
    9: "SEP",
    10: "OCT",
    11: "NOV",
    12: "DEC",
  };

  return (
    <div
      className="d-flex flex-column flex-sm-row rounded-4 bg-gray-700"
      style={{ overflow: "hidden", width: "min(960px,100%)" }}
    >
      <div className="d-flex gap-3 p-3 px-4 align-items-center">
        <div className="d-flex gap-2">
          <h1 className="h2 m-0">
            {EDateA && EDateA[0] && Number(EDateA[0]) < 10
              ? `0${Number(EDateA[0])}`
              : Number(EDateA[0])}
          </h1>
          <div className="d-flex align-items-center justify-content-center flex-column gap-1">
            <p className="caption m-0 text-primary" style={{ fontWeight: 500 }}>
              {EDateA && EDateA[1] && MONTHs[Number(EDateA[1])]}
            </p>
            <p className="caption m-0 text-primary" style={{ fontWeight: 500 }}>
              {EDateA && EDateA[2] && EDateA[2]}
            </p>
          </div>
        </div>
        <div className="d-flex flex-column gap-1">
          <h2 className="body1 m-0">
            {data.name},{" "}
            <city className="caption" style={{ fontStyle: "italic" }}>
              {data.place}
            </city>
          </h2>
          {data.description && <p className="body2 m-0">{data.description}</p>}
        </div>
      </div>
      <div
        className={`d-flex gap-3 p-4  caption ms-0 ms-sm-auto ${
          data.completed ? "bg-yellow-800" : "bg-yellow-100 text-dark"
        }`}
      >
        {data.completed ? (
          <p className="caption m-auto">Completed</p>
        ) : (
          <a
            className="d-flex no-underline align-items-center caption gap-2 text-dark px-2 mx-1"
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View <i className="bi bi-arrow-up-right"></i>
          </a>
        )}
      </div>
    </div>
  );
}
