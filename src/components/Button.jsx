import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ label }) => {
  return <button className="btn">{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
