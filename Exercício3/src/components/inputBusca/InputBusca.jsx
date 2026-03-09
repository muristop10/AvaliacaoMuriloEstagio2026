import './InputBusca.css'
import React from "react";

export default function InputBusca(props) {
    return <>
        <input type="text" placeholder={props.placeholder} id={props.id} />
    </>
}