import React from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Navigate , useNavigate, Link } from "react-router-dom";
import Loader from "./loader";

export default function Login() {
  
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [load, setLoad] = React.useState(false);
  
  const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
  let obj = {};
  let navigate = useNavigate();
  
  function montarobj(){
    setLoad(true);
    obj = {
      email: email,
      password: senha
    }
    console.log(obj);
    const response = axios.post(URL, obj);
    response.catch(err => {
      if(err.response.status !== 200){
        alert("Algo deu errado, por favor verifique os dados e tente novamente");
        setLoad(false);
      }
    });
    response.then( result => {
      if(result.status === 200){
        console.log(result.data.token);
        // tbm vai precisar do result.data.image//
        navigate("/hoje");
      }
    });
  }  
  
    return (
      <>
      <Iconeprincipal>
          <img src="" alt =""/>
          <h1>TrackIt</h1>
      </Iconeprincipal>
      <Entradas>
          <input placeholder="  email" value={email} onChange={e => setEmail(e.target.value)} disabled = {load}/>
          <input placeholder="  senha" value={senha} onChange={e => setSenha(e.target.value)} disabled = {load}/>
      </Entradas>
      <Cadastrar>
      <Botão onClick={(load === false) && montarobj} disabled = {load}>
        {(load) ? <Loader/> : <h2>Entrar</h2>}
      </Botão>
      <Link to= '/cadastro'>
        <h3>
        Não tem uma conta? Cadastre-se
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