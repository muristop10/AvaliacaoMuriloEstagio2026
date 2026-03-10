import REact from "react";
import "./itemListaRepos.css"

export default function ItemListaRepos(props) {
    return <>
        <li id={props.id} script={props.script}>
            {props.children}
        </li>
    </>
}