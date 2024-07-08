import React, { useState } from "react";
import "./Button.css";
import { ArrowForward, KeyboardArrowRight } from "@mui/icons-material";

export interface ButtonVariants {
  label: string;
  variant: "large" | "medium" | "small";
}

const ButtonTert: React.FC<ButtonVariants> = ({ label, variant }) => {
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
        gap: "2px",
        width: "fit-content",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={`btntert-${variant} `}>{label}</button>
      <KeyboardArrowRight
        sx={{
          color: "#2424A6",
          width:
            variant === "large"
              ? "24px"
              : variant === "medium"
                ? "22px"
                : "20px",
        }}
      />
    </div>
  );
};

export default ButtonTert;
