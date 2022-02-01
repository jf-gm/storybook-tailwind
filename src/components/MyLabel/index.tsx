import "./style.css";

export interface MyLabelProps {
  /**
   * Here goes the text content of the label
   */
  label?: string;
  /**
   * Label size
   */
  size?: "small" | "normal" | "h1" | "h2" | "h3";
  /**
   * If true, label text is going to be upper case
   */
  allCaps?: boolean;
  /**
   * Custom color for font
   */
  fontColor?: string;
}

/**
 * Simple label
 */
export const MyLabel = ({
  allCaps = false,
  label = "no label",
  size = "normal",
  fontColor = "",
}: MyLabelProps) => {
  return (
    <span
      className={`label label-${size} ${allCaps ? "allCaps" : ""}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
