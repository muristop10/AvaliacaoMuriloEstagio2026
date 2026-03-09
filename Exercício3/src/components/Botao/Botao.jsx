import React from "react";
import "./Botao.css";

export default function Botao(props) {
    const click = async () => {
        const query = document.getElementById("inputBusca").value;
        // props.script vai puxar o chamada API, e o query passa o valor do input
        const dados = await props.script(query);
        // até agora só mandava no console, com setDados vai incluir no react
        console.log(dados);

        if (dados && props.setDados) {
            // setDados passado na app, para atualizar o estado
            props.setDados(dados);
        }
    };

    return (
        <button onClick={click}>
            {props.children}
        </button>
    );
}