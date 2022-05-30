import React, { useContext, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import Footer from "./footer";
import Header from "./header";
import Habito from "./habito";
import Habitocriando from "./habitocriando";
import Texthbt from "./textsemhabito";
import UserContext from "./context";

export default function Habitos() {
    

    const [clicou, setClicou] = React.useState(false);
    const [hbtsfeitos, setHbtsfeitos] = React.useState([]);
    
    const {user} = useContext(UserContext);

    const config = {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    }
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    
    function atualizahabits(){
      axios.get(URL, config)
          .then( result => {
      setHbtsfeitos(result.data);
    });
    }
    useEffect(() => {
      atualizahabits();
    }, []);

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
            <p>
              +
            </p>
          </Adicionar>
        </Menusuperior>
        <EspacoHabitos>
          {(clicou) && <Habitocriando cancelou = {fechahabito} atualiza = {atualizahabits}/>}
          {(hbtsfeitos.length !== 0)? hbtsfeitos.map((habit, index)=> <Habito key = {index} text = {habit.name} semana = {habit.days} id = {habit.id} atualiza = {atualizahabits} index = {index}/>): <Texthbt/>}
        </EspacoHabitos>
      </Container>
      <Footer/>
      </>
    );
}

const Container = styled.div`
  width: 100%;
  min-height: 800px;
  height: 100%;
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

  p {
      font-family: 'Lexend Deca';
      font-style: normal;
      font-weight: 400;
      font-size: 26.976px;
      line-height: 34px;
      color: #FFFFFF;
      margin-bottom: 4px;
  }
`;
const EspacoHabitos = styled.div`
  padding-bottom: 120px;
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