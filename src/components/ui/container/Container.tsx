import React, { CSSProperties } from 'react';
import './Container.css'

type Props = {
    children?: React.ReactNode, backgroundColor?: CSSProperties["color"], width?: CSSProperties["width"], height?: CSSProperties["height"],
    marginLeft?: number,
    marginTop?: number,
    marginRight?: number,
    marginBottom?: number,
    borderTopRightRadius?: number,
    borderBottomRightRadius?: number,
    justifyContent? : CSSProperties["justifyContent"],

};

const Container: React.FC<Props> = ({ children, backgroundColor, width, height, marginLeft,
    marginTop,
    marginRight,
    marginBottom, justifyContent ,
    borderTopRightRadius,
    borderBottomRightRadius}) => {
    return <div className="Container" style={{
        backgroundColor,
        width,
        height,
        marginLeft,
        marginTop,
        marginRight,
        marginBottom,
        justifyContent,
        borderTopRightRadius,
        borderBottomRightRadius
    }}>{children}</div>
}

export default Container;