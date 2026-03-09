import React from "react";
import "./SelectOrdemRepositorios.css"

export default function SelectOrdemRepositorios(props) {
    return <>
        <select id={props.id} class="Select-ordem">{props.children}</select>
    </>
}