import React from "react";

export const filtrarRepos = (repositorios, criterio) => {
    let repositoriosFiltrados = [...repositorios];
    switch (criterio) {
        case "estrelas_desc":
            repositoriosFiltrados.sort((a, b) => b.stargazers_count - a.stargazers_count);
            break;
        case "estrelas_asc":
            repositoriosFiltrados.sort((a, b) => a.stargazers_count - b.stargazers_count);
            break;
        case "nome_asc":
            repositoriosFiltrados.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "nome_desc":
            repositoriosFiltrados.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case "data_atualizacao_desc":
            repositoriosFiltrados.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
            break;
        case "data_atualizacao_asc":
            repositoriosFiltrados.sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at));
            break;
        default:
            break;
    }
    return repositoriosFiltrados;
}