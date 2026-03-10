// * Eu, como usuário, desejo clicar em um repositório da lista e ser redirecionado para uma página de detalhes do repositório, exibindo:
//     * nome
//     * descrição
//     * número de estrelas
//     * linguagem principal
//     * link externo para o repositório no GitHub

import { useState } from "react";
import React from "react";
import Titulo from "./components/titulo/Titulo";
import InputBusca from "./components/inputBusca/InputBusca";
import ListaRepos from "./components/listaRepos/listaRepos";
import Container from "./components/container/Container";
import Botao from "./components/botao/Botao";
import Paragrafo from "./components/paragrafo/Paragrafo";
import ImgPerfil from "./components/imgPerfil/ImgPerfil";
import ItemListaRepos from "./components/itemListaRepos/itemListaRepos";
import SelectOrdemRepositorios from "./components/SelectOrdemRepositorios/SelectOrdemRepositorios";
import { buscarDados } from "./components/api/chamadaApi";
import { filtrarRepos } from "./components/scripts/filtroSelect";


export default function App() {
  // set dos use states, para mostrar os elementos dinamicos nos componentes react
  const [dados, setDados] = useState(null);
  const [repoExpandido, setRepoExpandido] = useState(null); // rastreia qual repositório está expandido

  // mostrar: expande se não estiver, recolhe se estiver -> itemListaRepo
  const mostrarDetalhes = (id) => {
    setRepoExpandido(repoExpandido === id ? null : id);
  };

  return <>

    <Titulo>Bem vindo ao GitSearch!</Titulo>

    <Container class="div-container">
        <InputBusca placeholder="Digite o nome do usuário do GitHub" id="inputBusca"/>
        <Botao script={buscarDados} setDados={setDados}>Buscar</Botao>
        <Paragrafo id="resultado" class="paragrafoErro"></Paragrafo>
    </Container>

    {dados && <>
      <Container class="div-dadosPerfil">
        <ImgPerfil id="imgPerfil" alt="Foto de perfil do usuário" src={dados.perfil.avatar_url} />
        <Paragrafo id="nomeUsuario">Nome do usuário: {dados.perfil.name || "Indisponível"}</Paragrafo>
        <Paragrafo id="bioUsuario">Biografia: {dados.perfil.bio || "Indisponível"}</Paragrafo>
        <Paragrafo id="seguidores">Seguidores: {dados.perfil.followers || "Indisponível"}</Paragrafo>
        <Paragrafo id="seguindo">Seguindo: {dados.perfil.following || "Indisponível"}</Paragrafo>
        <Paragrafo id="email">Email: {dados.perfil.email || "Indisponível"}</Paragrafo>
      </Container>

      <Container class="div-dadosRepositorios">
        <SelectOrdemRepositorios class="select-ordem" script={ filtrarRepos } repositorios={dados.repositorios} setDados={setDados}>
          <option value="estrelas_desc">Estrelas (decrescente)</option>
          <option value="estrelas_asc">Estrelas (crescente)</option>
          <option value="nome_asc">Nome (A-Z)</option>
          <option value="nome_desc">Nome (Z-A)</option>
          <option value="data_atualizacao_desc">Data de atualização (mais recente)</option>
          <option value="data_atualizacao_asc">Data de atualização (mais antiga)</option>
        </SelectOrdemRepositorios>

        <ListaRepos>
          {dados.repositorios.map((repositorioDado) => (
            <ItemListaRepos key={repositorioDado.id} onClick={() => mostrarDetalhes(repositorioDado.id)}>
              <h3>{repositorioDado.name}</h3>
              <Paragrafo>Estrelas: {repositorioDado.stargazers_count + "⭐"}</Paragrafo>
              {repoExpandido === repositorioDado.id && ( <>
                  <Paragrafo>Descrição: {repositorioDado.description || "Indisponível"}</Paragrafo>
                  <Paragrafo>Linguagem principal: {repositorioDado.language || "Indisponível"}</Paragrafo>
                  <Paragrafo><a href={repositorioDado.html_url} target="_blank" rel="noopener noreferrer">Ver no GitHub</a></Paragrafo>
                </>
              )}
            </ItemListaRepos>
          ))}
          </ListaRepos>
        </Container>
        </>
    

      
    } 
  </>
};