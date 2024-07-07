import React from "react";
import "./Button.css";
export interface ButtonVariants {
  label: string;
  variant: "extra-large" | "large" | "medium" | "small";
  color: "primary" | "secondary" | "tertiary";
}
const Button: React.FC<ButtonVariants> = ({ label, variant, color }) => {
  return (
    <>
      <button className={`btn-${variant} btn-color-${color}`}>{label}</button>
    </>
  );
};

export default Button;
