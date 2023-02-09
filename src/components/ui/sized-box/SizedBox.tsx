import React, { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";
import "./SizedBox.css";

type Props = {
  children?: React.ReactNode;
  backgroundColor?: CSSProperties["color"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  hidden?: boolean ;
};

const SizedBox: React.FC<Props> = ({
  children,
  backgroundColor,
  width,
  height,
  hidden,
}) => {
  return (
    <div
      hidden={hidden}
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
