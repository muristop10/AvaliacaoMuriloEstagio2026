import './Input.css'
import React from "react";

export default function Input(props) {
    return <>
        <input type="text" placeholder={props.placeholder} id={props.id} />
    </>
}