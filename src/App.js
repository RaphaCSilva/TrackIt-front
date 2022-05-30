import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from "react";
import Login from "./componentes/login"
import Cadastro from "./componentes/cadastro"
import Habitos from "./componentes/habitos";
import Hoje from "./componentes/hoje";
import Historico from "./componentes/historico";
import UserContext from "./componentes/context";

export default function App() {
  const [user, setUser] = useState({});
  const [progress, setProgress] = useState(0);

  return (
    <UserContext.Provider value = {{user, setUser, progress, setProgress}}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/habitos" element={<Habitos/>}/>
          <Route path="/hoje" element={<Hoje/>}/>
          <Route path="/historico" element={<Historico/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
