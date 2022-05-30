import React from "react";
import axios from 'axios';
import styled from 'styled-components';
import Footer from "./footer";
import Header from "./header";
import Habito from "./habito";
import Habitocriando from "./habitocriando";
import Texthbt from "./textsemhabito";

export default function Habitos() {
    

    const [clicou, setClicou] = React.useState(false);
    const [hbtsfeitos, setHbtsfeitos] = React.useState([]);


    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQzNywiaWF0IjoxNjUzODY2MzA3fQ.U8oqsctH5ueoOr0rYhljr5ja-n5h8oRkPM3oHgToRA0";
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const response = axios.get(URL, config);
    response.then( result => {
      setHbtsfeitos(result.data);
    });

    function adicionarhabito(){
      setClicou(true);
    }

    function fechahabito(){
      setClicou(false);
    }

    return(
      <>
      <Header/>
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
          {(hbtsfeitos.length !== 0)? hbtsfeitos.map((habit, index)=> <Habito key = {index} text = {habit.name} semana = {habit.days} index = {index}/>): <Texthbt/>}
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
  h3 {
    width: 338px;
    height: 74px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin-top: 29px;
    margin-left: 19px;
  }
`;