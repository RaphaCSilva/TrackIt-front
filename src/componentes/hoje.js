import React, { useContext } from "react";
import styled from 'styled-components';
import Footer from "./footer";
import Header from "./header";
import dayjs from "dayjs";
import UserContext from "./context";
import axios from 'axios';

export default function Hoje() {

  let hoje = dayjs({});
  const {user, progress, setProgress} = useContext(UserContext);
  const [hbtshoje, setHbtshoje] = React.useState([]);

  const config = {
    headers: {
      "Authorization": `Bearer ${user.token}`
    }
  }
  const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
  const response = axios.get(URL, config);
  response.then( result => {
    setHbtshoje(result.data);
  });

    return(
      <>
      <Header/>
      <Container>
        <Menusuperior>  
          <h1>
            Segunda, 17/05
          </h1>
          <p>
            Nenhum hábito concluído ainda
          </p>
        </Menusuperior>
        <EspaçoHabitos>
          <Caixabranca>
            <Textos>  
              <h2>
                Ler 1 capítulo de livro
              </h2>
              <p>
                <span>Sequência atual:</span><span className="recorde"> 3 dias</span>
              </p>
              <p>
                <span>Sequência recorde:</span><span> 3 dias</span>
              </p>
            </Textos>  
            <Check>
              <button>
                <ion-icon name="checkmark-outline"></ion-icon>
              </button>
            </Check>
          </Caixabranca>
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

const EspaçoHabitos = styled.div`
  padding-bottom: 120px;
  padding-top: 28px;
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

const Menusuperior = styled.div`
  h1 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    padding-top: 98px;
    padding-left: 17px;
  }
  p {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px; 
    color: #BABABA;
    padding-left: 17px;
  }
  .recorde {
    color: #8FC549;
  }
`;

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