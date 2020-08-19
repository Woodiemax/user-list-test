import React from "react";
import "./Arrow.css";

export const Arrow = ({ sortArrow }) => {
  const classes = sortArrow === "asc" ? "triangle-before" : "triangle-after";

  return <span className={classes}> </span>;
};
