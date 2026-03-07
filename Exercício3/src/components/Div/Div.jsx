import "./Div.css"
import React from "react";

export default function Div(props) {
    return <>
        <div className="div-container">{props.children}</div>
    </>
}