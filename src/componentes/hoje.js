import React from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Navigate, useNavigate, Link } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import dayjs from "dayjs";

export default function Hoje() {
  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQzNywiaWF0IjoxNjUzNzY0OTAyfQ.2ObdnB0Vj402NpERhqdIl5oc41gUvKtdyJWEfCOcOyk"
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
