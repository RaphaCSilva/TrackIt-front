import React from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Navigate, useNavigate, Link } from "react-router-dom";

export default function Footer() {
  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQzNywiaWF0IjoxNjUzNzY0OTAyfQ.2ObdnB0Vj402NpERhqdIl5oc41gUvKtdyJWEfCOcOyk"
    

    return(
      <>
      <Barrainferior>
        <h1> Habitos </h1>
        <h1> Histórico </h1>
      </Barrainferior>
      </>
    );
}

const Barrainferior = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  left: 0px;
  bottom: 0px;
  background: #FFFFFF;
  h1 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
  }
`;