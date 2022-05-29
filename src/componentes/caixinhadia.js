import React from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Navigate, useNavigate, Link } from "react-router-dom";

export default function Caixinhadia(props) {
  
  
  function pintacaixas(num){
    if(props.semana.includes(num)){
        return "clicado";
    }
  }
  
  return(
    <>
      <button className={pintacaixas(props.index)}> 
        <h1> 
            {props.dia} 
        </h1> 
      </button>
    </>
  );
}