import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {Component, useState} from "react";
import Login from "./componentes/login"
import Cadastro from "./componentes/cadastro"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="" element={<Login/>}/>
    <Route path="/cadastro" element={<Cadastro/>}/>
    </Routes>
    </BrowserRouter>
  );
}
