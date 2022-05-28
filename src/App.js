import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {Component, useState} from "react";
import Login from "./componentes/login"
import Cadastro from "./componentes/cadastro"
import Habitos from "./componentes/habitos";
import Hoje from "./componentes/hoje";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="" element={<Login/>}/>
    <Route path="/cadastro" element={<Cadastro/>}/>
    <Route path="/habitos" element={<Habitos/>}/>
    <Route path="/hoje" element={<Hoje/>}/>
    </Routes>
    </BrowserRouter>
  );
}
