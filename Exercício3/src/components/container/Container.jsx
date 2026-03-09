import "./Container.css"
import React from "react";

export default function Container(props) {
    return <>
        <div class={props.class}>{props.children}</div>
    </>
}