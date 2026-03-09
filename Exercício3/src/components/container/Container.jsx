import "./Container.css"
import React from "react";

export default function Container(props) {
    return <>
        <div className="div-container">{props.children}</div>
    </>
}