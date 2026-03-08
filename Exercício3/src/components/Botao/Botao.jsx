import React from "react";
import "../Botao/Botao.css"

export default function Botao(props) {
    const a = async () => {
        const query = document.getElementById("inputBusca").value;
        const dados = await props.script(query);
        console.log(dados);
    };

    return <>
        <button onClick={a} id="botaoBusca">
            {props.children}
        </button>
    </>
}