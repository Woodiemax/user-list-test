import React from "react";
import LockImg from "../assets/private48.png";
import "./Status.css";

export const Disable = () => {
  return <div className="disable">off</div>;
};
export const Enable = () => {
  return <div className="enable">on</div>;
};
export const Block = () => {
  return (
    <div className="lock">
      <img className="lock-img" src={LockImg} alt="lock" />
    </div>
  );
};
