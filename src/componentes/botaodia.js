import React from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Navigate, useNavigate, Link } from "react-router-dom";

export default function BotaoDia(props) {
    
    const [clicado, setClicado] = React.useState(false);

    function clicando(){
        if(clicado){
          setClicado(false);
          props.tiranum(props.index);
        }else{
          setClicado(true);
          props.recebenum(props.index);
        }
    }
  
  return(
    <>
      <button onClick = {clicando} className={(clicado === true) && "clicado"} disabled = {props.desliga}> 
        <h1> 
            {props.dia} 
        </h1> 
      </button>
    </>
  );
}