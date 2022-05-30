import React from "react";
import styled from 'styled-components';
import Footer from "./footer";
import Header from "./header";
import dayjs from "dayjs";

export default function Hoje() {

  let hoje = dayjs({});
  console.log(hoje);

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
