import React from "react";
import "./itemListaRepos.css"

export default function ItemListaRepos(props) {
    return <>
        <li id={props.id} script={props.script} onClick={props.onClick}>
            {props.children}
        </li>
    </>
}