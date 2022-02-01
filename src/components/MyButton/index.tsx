import React from "react";
import { MyLabel, MyLabelProps } from "../MyLabel";
import "./style.css";

interface ButtonProps extends MyLabelProps {
  /**
   * Color
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * OnClick event
   */
  onClick?: () => void;
}

/**
 * Simple button
 */
export const MyButton = ({
  allCaps = false,
  color = "primary",
  label = "click me",
  size = "normal",
  fontColor = "#ffffff",
  onClick = () => {},
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex p-2 rounded-md transition-all text-white bg-button-${color}`}
    >
      <MyLabel
        label={label}
        allCaps={allCaps}
        size={size}
        fontColor={fontColor}
      />
    </button>
  );
};
