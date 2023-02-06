import React, { CSSProperties } from "react";
import "./SizedBox.css";

type Props = {
  children?: React.ReactNode;
  backgroundColor?: CSSProperties["color"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
};

const SizedBox: React.FC<Props> = ({
  children,
  backgroundColor,
  width,
  height,
}) => {
  return (
    <div
      className="Container"
      style={{
        backgroundColor,
        width,
        height,
      }}
    >
      {children}
    </div>
  );
};

export default SizedBox;
