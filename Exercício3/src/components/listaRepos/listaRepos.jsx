import React from "react";
import "./listaRepos.css"

export default function ListaRepos(props) {
    return <>
        <ol id={props.id}>{props.children}</ol>
    </>
}