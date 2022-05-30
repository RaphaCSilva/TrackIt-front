import React, { useContext, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import UserContext from "./context";

export default function Habitocheck(props) {
    
    const [feito, setFeito] = React.useState(false);
    const {user} = useContext(UserContext);

    const config = {
        headers: {
          "Authorization": `Bearer ${user.token}`
        }
    }
    
    
    useEffect(() => {
        if(props.feito){
            setFeito(true);
        }
      }, []);
    
    function checkar(){
        if(feito){
          const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/"+props.id+"/uncheck";
          const response = axios.post(URL,{}, config);
          response.then( result => {
            setFeito(false);
          });
        }else{
          const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/"+ props.id +"/check";
          const response = axios.post(URL,{}, config);
          response.then( result => {
            setFeito(true);
          });
        }
    }

    return(
      <Caixabranca>
        <Textos>  
          <h2>
            {props.nome}
          </h2>
          <p>
            <span>Sequência atual:</span><span className={(feito)? "recorde" : ""}> {props.sequencia} {(props.sequencia === 1) ? "dia" : "dias"}</span>
          </p>
          <p>
            <span>Sequência recorde:</span><span className={(feito && props.sequencia === props.recorde)? "recorde" : ""}> {(props.recorde === 1) ? "dia" : "dias"}</span>
          </p>
        </Textos>  
        <Check>
          <button onClick={checkar} className={(feito)? "clicado" : ""}>
            <ion-icon name="checkmark-outline"></ion-icon>
          </button>
        </Check>
      </Caixabranca>
    );
}

const Caixabranca = styled.div`
  min-width: 340px;
  height: 94px;
  background: #FFFFFF;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 18px;
  margin-left: 18px;
  display: flex;
  justify-content: space-between;
  
`;

const Textos = styled.div`
  padding-top: 13px;
  padding-left: 15px;
  h2 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    padding-bottom: 7px;
  }
  p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px; 
    color: #666666;
  }
  .recorde{
    color: #8FC549;
  }
`;

const Check = styled.div`
  
  button {
    width: 69px;
    height: 69px;
    margin-right: 13px;
    margin-top: 13px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #E7E7E7;
    background: #EBEBEB;
  }

  .clicado {
    background: #8FC549;
  }

  ion-icon {
    font-size: 48px;
    color: #FFFFFF;
  }
`;