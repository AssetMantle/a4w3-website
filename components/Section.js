import React from "react";

export default function Section({
  fullW = false,
  titleLink = false,
  title,
  subTitle,
  children,
  px = 3,
  subtitleWidth = 880,
}) {
  return (
    <section
      className={`${
        !fullW ? "container-xl" : "container-full mx-auto"
      } py-5 my-5 px-${px}`}
    >
      {title && (
        <h1 className="h1 px-3 text-capitalize text-center mb-3">{title}</h1>
      )}
      {subTitle && (
        <p
          className="subtitle1 text-center mx-auto my-3"
          style={{ maxWidth: `${subtitleWidth}px` }}
        >
          {subTitle}
        </p>
      )}
      {children}
    </section>
  );
}
