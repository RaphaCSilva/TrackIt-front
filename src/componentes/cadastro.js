import React from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Navigate, useNavigate, Link } from "react-router-dom";

export default function Cadastro() {
  
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [foto, setFoto] = React.useState("");
  
  let obj = {};
  let navigate = useNavigate();

  function montarobj(){
    obj = {
      email: email,
      name: nome,
      image: foto,
      password: senha
    }
    console.log(obj);
    const response = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', obj);
    response.then( result => {
      console.log(result);
      if(result.status === 200){
        navigate("/");
      }
    });
  }
    return (
      <>
      <Iconeprincipal>
          <img src=""/>
          <h1>TrackIt</h1>
      </Iconeprincipal>
      <Entradas>
          <input placeholder="  email" value={email} onChange={e => setEmail(e.target.value)}/>
          <input placeholder="  senha" value={senha} onChange={e => setSenha(e.target.value)}/>
          <input placeholder="  nome" value={nome} onChange={e => setNome(e.target.value)}/>
          <input placeholder="  foto" value={foto} onChange={e => setFoto(e.target.value)}/>
      </Entradas>
      <Cadastrar>
      <Botão onClick={montarobj}>
        <h2>
          Cadastrar
        </h2>
      </Botão>
      <Link to= '/'>
        <h3>
        Já tem uma conta? Faça Login!
        </h3>
      </Link>
      </Cadastrar>
      </>
    );
  }

  const Iconeprincipal = styled.div`
    width: 180px;
    height: 180px;
    margin: auto;
    margin-top: 68px;

    h1{
      font-family: 'Playball';
      font-style: normal;  
      font-weight: 400;
      font-size: 68.982px;
      line-height: 86px;
      color: #126BA5;
    }
  `;
  const Entradas = styled.div`
    display: flex;
    flex-direction: column;

    input{
      width: 303px;
      height: 45px;
      background: #FFFFFF;
      border: 1px solid #D5D5D5;
      border-radius: 5px;
      margin: auto;
      margin-bottom: 6px;
    }
  `;
  const Botão = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    margin: auto;

    h2{
      font-family: 'Lexend Deca';
      font-style: normal;
      font-weight: 400;
      font-size: 20.976px;
      line-height: 26px;
      color: #FFFFFF;
    }
  `;
  const Cadastrar = styled.div`
    h3{
      font-family: 'Lexend Deca';
      font-style: normal;
      font-weight: 400;
      font-size: 13.976px;
      line-height: 17px;
      text-align: center;
      color: #52B6FF;
      margin-top: 25px;
    }
  `;