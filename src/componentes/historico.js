import React from "react";
import styled from 'styled-components';
import Footer from "./footer";
import Header from "./header";

export default function Historico() {


    return(
      <>
      <Header/>
      <Container>
        <Menusuperior>  
          <h1>
            Histórico
          </h1>
          <p>
            Em breve você poderá ver o histórico dos seus hábitos aqui!
          </p>
        </Menusuperior>
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
  
  padding-left: 17px;
  
  h1 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    padding-top: 98px;
  }

  p {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    padding-top: 17px;
  }
`;
