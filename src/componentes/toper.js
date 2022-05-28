import React from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Navigate, useNavigate, Link } from "react-router-dom";

export default function Toper() {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQzNywiaWF0IjoxNjUzNzMyNTI5fQ.nsn0VJ5Cr1tQgBInn0aeTDJEDfgpb6h8OwTR-Nwmt_4"
    

    return(
      <>
      <Barrasuperior>
          <h1>
              TrackIt
          </h1>
          <img src="https://veterinario.pt/wp-content/uploads/2015/09/cat-pet-animal-domestic-gato800.jpg" alt="">
          </img>
      </Barrasuperior>
      </>
    );
}

const Barrasuperior = styled.div `
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;
  background: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  
  h1{
    width: 97px;
    height: 49px;
    margin-left: 18px;
    margin-top: 10px;
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
  }
  img{
    width: 51px;
    height: 51px;
    margin-right: 18px;
    margin-top: 9px;
    
    background: url(image.png);
    border-radius: 98.5px;
  }
`;
