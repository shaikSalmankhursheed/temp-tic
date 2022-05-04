import React from "react";
import { FaRegCircle, FaTimes, FaPen } from "react-icons/fa";
import "./Icon.css";

const Icon = (props) => {
  switch (props.name) {
    case "circle":
      return <FaRegCircle className="icons" />;
    case "cross":
      return <FaTimes className="icons" />;
    default:
      return <FaPen className="icons" />;
  }
};

export default Icon;
