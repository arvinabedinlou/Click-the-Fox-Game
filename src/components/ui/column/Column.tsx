import React, { CSSProperties } from 'react';
import './Column.css'

type Props = {
    children: React.ReactNode,
    height?: CSSProperties["height"],
    width?: CSSProperties["width"],
    alignItems?: CSSProperties["alignItems"]
    justifyContent?: CSSProperties["justifyContent"],
    backgroundColor?: CSSProperties["backgroundColor"],
    marginLeft?: CSSProperties["marginLeft"],
    marginRight?: CSSProperties["marginRight"],
};

const Column: React.FC<Props> = ({ children, height, width, alignItems, justifyContent, backgroundColor, marginRight, marginLeft }) => {
    return <div className="Column" style={{ height, width, alignItems, justifyContent, backgroundColor, marginRight, marginLeft }}>{children}</div>
}

export default Column;