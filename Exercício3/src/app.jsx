// * Eu, como usuário, desejo buscar por um usuário do GitHub através de um campo de pesquisa;
// * Eu, como usuário, desejo ver os detalhes desse usuário buscado, incluindo:
//     * número de seguidores
//     * número de seguidos
//     * imagem do avatar
//     * e-mail (caso disponível)
//     * bio
// * Eu, como usuário, desejo ver a listagem de repositórios públicos desse usuário, ordenada por número de estrelas (decrescente) por padrão;
// * Eu, como usuário, desejo mudar a ordem da listagem de repositórios (ex: crescente por estrelas, por nome, data de atualização);

// * Eu, como usuário, desejo clicar em um repositório da lista e ser redirecionado para uma página de detalhes do repositório, exibindo:
//     * nome
//     * descrição
//     * número de estrelas
//     * linguagem principal
//     * link externo para o repositório no GitHun

// * O layout deve ser responsivo;

import { useState } from "react";
import React from "react";
import Titulo from "./components/titulo/Titulo";
import InputBusca from "./components/inputBusca/InputBusca";
import Container from "./components/container/Container";
import Botao from "./components/botao/Botao";
import Paragrafo from "./components/paragrafo/Paragrafo";
import ImgPerfil from "./components/imgPerfil/ImgPerfil";
import SelectOrdemRepositorios from "./components/SelectOrdemRepositorios/SelectOrdemRepositorios";
import { buscarDados } from "./components/api/chamadaApi";


export default function App() {
  // set dos use states, para mostrar os elementos dinamicos nos componentes react
  const [dados, setDados] = useState(null);

  return <>

    <Titulo>Bem vindo ao GitSearch!</Titulo>

    <Container class="div-container">
        <InputBusca placeholder="Digite o nome do usuário do GitHub" id="inputBusca"/>
        <Botao script={buscarDados} setDados={setDados}>Buscar</Botao>
        <Paragrafo id="resultado" class="paragrafoErro"></Paragrafo>
    </Container>

    {dados &&
      <Container class="div-dadosPerfil">
        <ImgPerfil id="imgPerfil" alt="Foto de perfil do usuário" src={dados.perfil.avatar_url} />
        <Paragrafo id="nomeUsuario">Nome do usuário: {dados.perfil.name || "Indisponível"}</Paragrafo>
        <Paragrafo id="bioUsuario">Biografia: {dados.perfil.bio|| "Indisponível"}</Paragrafo>
        <Paragrafo id="seguidores">Seguidores: {dados.perfil.followers|| "Indisponível"}</Paragrafo>
        <Paragrafo id="seguindo">Seguindo: {dados.perfil.following|| "Indisponível"}</Paragrafo>
        <Paragrafo id="email">Email: {dados.perfil.email|| "Indisponível"}</Paragrafo>

        <Container class="div-dadosRepositorios">
        </Container>

      </Container>
    } 
  </>
};