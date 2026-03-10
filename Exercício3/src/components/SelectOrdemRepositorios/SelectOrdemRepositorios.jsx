import React from "react";
import "./SelectOrdemRepositorios.css"

export default function SelectOrdemRepositorios(props) {
    const mudancaDeOpcao = (opcao) => {
        const criterio = opcao.target.value;
        // chama função de ordenação passando lista e critério, retorna nova lista
        const repositoriosFiltrados = props.script(props.repositorios, criterio);
        // atualiza estado global com os dados anteriores e substitui só os repositórios
        props.setDados(prevDados => ({
            ...prevDados,
            repositorios: repositoriosFiltrados // lista já ordenada para o componente react
        }));
    };

    return <>
        <select id={props.id} className={props.class} defaultValue="estrelas_asc" onChange={mudancaDeOpcao}>
            {props.children}
        </select>
    </>
}