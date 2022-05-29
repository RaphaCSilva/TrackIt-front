import React from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Navigate, useNavigate, Link } from "react-router-dom";

export default function Habito() {

    return(
      <>
      <Caixabranca>
            <input/>
            <Dias>
               
            </Dias>
        </Caixabranca>
      </>
    );
}
const Caixabranca = styled.div`
  min-width: 340px;
  height: 180px;
  background: #FFFFFF;
  border-radius: 5px;
  margin-top: 20px;
  margin-right: 18px;
  margin-left: 18px;
  

  input {
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px; 
    margin-top: 19px;
    margin-left: 18px;
  }
`;

const Dias = styled.div`
  margin-top: 8px;
  margin-left: 18px;

  .clicado {
    background: #CFCFCF;

    h1 {
      color: #FFFFFF;
    }
  }
  button {
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;  
    margin-right: 4px;
    
    h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;         
    }
  }
`;