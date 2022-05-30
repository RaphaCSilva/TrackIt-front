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
