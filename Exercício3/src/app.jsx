import { useState } from "react";
import React from "react";
import Titulo from "./components/Titulo/Titulo";
import Input from "./components/Input/Input";
import Div from "./components/Div/Div";

export default function App() {
  return <>
    <Titulo>Bem vindo ao GitSearch!</Titulo>

    <Div class="div-container">
        <Input placeholder="Digite o nome do usuário do GitHub" id="inputBusca"/>
    </Div>
  </>
};