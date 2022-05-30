import React from "react";

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