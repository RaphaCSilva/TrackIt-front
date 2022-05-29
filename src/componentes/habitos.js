import React from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Navigate, useNavigate, Link } from "react-router-dom";
import Footer from "./footer";
import Toper from "./toper";
import Habito from "./habito";
import Habitocriando from "./habitocriando";

export default function Habitos() {
    
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQzNywiaWF0IjoxNjUzNzY0OTAyfQ.2ObdnB0Vj402NpERhqdIl5oc41gUvKtdyJWEfCOcOyk"
    
    const [clicou, setClicou] = React.useState(false);

    function adicionarhabito(){
      setClicou(true);
    }
    function fechahabito(){
      setClicou(false);
    }

    return(
      <>
      <Toper/>
      <Container>
        <Menusuperior>  
          <h1>
            Meus hábitos
          </h1>
          <Adicionar onClick={adicionarhabito}>
            <h2>
              +
            </h2>
          </Adicionar>
        </Menusuperior>
        <EspaçoHabitos>
          {(clicou === true) && <Habitocriando cancelou = {fechahabito}/>}
          <Habito/>
        </EspaçoHabitos>
      </Container>
      <Footer/>
      </>
    );
}

const Container = styled.div`
  width: 100%;
  height: 1000px;
  background: #E5E5E5;
`;

const Menusuperior = styled.div`
  display: flex;
  
  h1 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    padding-top: 98px;
    padding-left: 17px
  }
`;

const Adicionar = styled.div`
  width: 40px;
  height: 35px;
  margin-left: auto;
  margin-right: 18px;
  margin-top: 92px;
  background: #52B6FF;
  border-radius: 4.63636px;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
      font-family: 'Lexend Deca';
      font-style: normal;
      font-weight: 400;
      font-size: 26.976px;
      line-height: 34px;
      color: #FFFFFF;
  }
`;
const EspaçoHabitos = styled.div`

`;