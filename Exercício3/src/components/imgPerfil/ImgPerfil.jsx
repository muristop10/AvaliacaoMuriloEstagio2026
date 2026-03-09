import React from "react";
import "./ImgPerfil.css"

export default function ImgPerfil(props) {
    return <>
        <img id={props.id} src={props.src}></img>
    </>
}