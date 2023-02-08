import React, { CSSProperties } from "react";
import ReactLoading, { LoadingType } from "react-loading";
import Column from "../column/Column";

type Props = {
  color?: CSSProperties["color"];
  width?: number;
  height?: number;
  type?: LoadingType;
};

const Loading: React.FC<Props> = ({
  color,
  width = 40,
  height = 40,
  type = "bubbles",
}) => {
  return (
    <>
      {/* // <Column height={'100%'} justifyContent={'center'} width="100%"> */}
      <div style={{ overflow: "visible" }}>
        <ReactLoading type={type} width={width} height={height} color={color} />
      </div>
      {/* </Column> */}
    </>
  );
};

export default Loading;
