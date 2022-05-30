import React, {useContext} from "react";
import axios from "axios";
import styled from 'styled-components';
import Caixinhadia from "./caixinhadia";
import UserContext from "./context";

export default function Habito(props) {
 
    const {user} = useContext(UserContext);
    const semana = ["D", "S", "T", "Q", "Q", "S", "S"]
    const config = {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    }
     
    function deletehabit(){
      const confirm = window.confirm("Você tem certeza que quer excluir este hábito ?");
      if(confirm){
      const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/"+props.id;
      axios.delete(URL, config)
            .then( result => {
              props.atualiza();
          });
      }
    }

    return(
      <Caixabranca>
            <h2>
              {props.text}
            </h2>
            <ion-icon name="trash-outline" onClick={deletehabit}></ion-icon>
            <Dias>
              {semana.map((day, index)=> <Caixinhadia key = {index} dia = {day} index = {index} semana={props.semana}/>)}
            </Dias>
        </Caixabranca>
    );
}
const Caixabranca = styled.div`
  position: relative;
  min-width: 340px;
  height: 91px;
  background: #FFFFFF;
  border-radius: 5px;
  margin-top: 10px;
  margin-right: 18px;
  margin-left: 18px;
  
  ion-icon {
    position: absolute;
    top: 11px;
    right: 10px;
  }

  h2 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    padding-top: 13px;
    padding-left: 15px;
  }
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