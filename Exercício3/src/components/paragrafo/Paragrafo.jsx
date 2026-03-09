import React from "react"
import "./Paragrafo.css"

export default function Paragrafo(props) {
    return <>
        <p id={props.id} class={props.class}>
            {props.children}
        </p>
    </>
}