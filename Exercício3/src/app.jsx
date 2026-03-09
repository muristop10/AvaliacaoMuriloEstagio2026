import { useState } from "react";
import React from "react";
import Titulo from "./components/titulo/Titulo";
import InputBusca from "./components/inputBusca/InputBusca";
import Container from "./components/container/Container";
import Botao from "./components/botao/Botao";
import Paragrafo from "./components/Paragrafo/Paragrafo";
import ImgPerfil from "./components/imgPerfil/ImgPerfil";
import { buscarDados } from "./components/api/chamadaApi";


export default function App() {
  return <>
    <Titulo>Bem vindo ao GitSearch!</Titulo>

    <Container class="div-container">
        <InputBusca placeholder="Digite o nome do usuário do GitHub" id="inputBusca"/>
        <Botao script={buscarDados}>Buscar</Botao>
        <Paragrafo id="resultado" class="paragrafoErro"></Paragrafo>
    </Container>

    <Container>
      <ImgPerfil id="imgPerfil" src="" alt="Foto de perfil do usuário"/>
      <Paragrafo id="nomeUsuario"></Paragrafo>
      <Paragrafo id="bioUsuario"></Paragrafo>
    </Container>
  </>
};