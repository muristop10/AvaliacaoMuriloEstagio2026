import React from "react";
import "./Botao.css";

export default function Botao(props) {
    const click = async () => {
        const query = document.getElementById("inputBusca").value;
        // props.script vai puxar o chamada API, e o query passa o valor do input
        const dados = await props.script(query);
        console.log(dados);
    };

    return (
        <button onClick={click}>
            {props.children}
        </button>
    );
}