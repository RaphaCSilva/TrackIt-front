import React from "react";
import styled from 'styled-components';

export default function Header() {

    return(
      <>
      <Barrasuperior>
          <h1>
              TrackIt
          </h1>
          <img src="https://veterinario.pt/wp-content/uploads/2015/09/cat-pet-animal-domestic-gato800.jpg" alt=""/>
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
    position: absolute;
    width: 51px;
    height: 51px;
    right: 18px;
    top: 9px;
    border-radius: 98.5px;
  }
`;
