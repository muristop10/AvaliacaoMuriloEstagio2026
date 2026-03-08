import { useState } from "react";
import React from "react";
import Titulo from "./components/Titulo/Titulo";
import Input from "./components/Input/Input";
import Div from "./components/Div/Div";
import Botao from "./components/Botao/Botao";
import { buscarDados } from "./components/api/chamadaApi";

export default function App() {
  return <>
    <Titulo>Bem vindo ao GitSearch!</Titulo>


    <Div class="div-container">
        <Input placeholder="Digite o nome do usuário do GitHub" id="inputBusca"/>
        <Botao script={buscarDados}>Buscar</Botao>
    </Div>

    <Div>

    </Div>
  </>
};