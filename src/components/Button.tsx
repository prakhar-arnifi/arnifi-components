import React, { useState } from "react";
import "./Button.css";
import { ArrowForward } from "@mui/icons-material";

export interface ButtonVariants {
  label: string;
  variant: "extra-large" | "large" | "medium" | "small";
  color: "primary" | "secondary" | "tertiary";
  arrow: boolean;
}

const Button: React.FC<ButtonVariants> = ({ label, variant, color, arrow }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`btn-wrapper ${isHovered ? "hover" : ""}`}
      style={{
        width: "fit-content",
        boxShadow:
          color === "tertiary"
            ? "  0px 0px 1px 0px rgba(40, 41, 61, 0.08),0px 0.5px 2px 0px rgba(96, 97, 112, 0.16)"
            : "unset",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={`btn-${variant} btn-color-${color}`}>{label}</button>
      {arrow && (
        <div className={`arrow-wrapper-${variant} arrow-wrapper-${color}`}>
          <ArrowForward
            sx={{
              width:
                variant === "extra-large"
                  ? "24px"
                  : variant === "large" || variant === "medium"
                    ? "22px"
                    : "20px",
              color: color === "primary" ? "white" : "#0E0B3E",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Button;
