import React from "react";

export default function BotaoDia(props) {
    
    const [clicado, setClicado] = React.useState(false);
    
    function clicando(){
        if(clicado){
          setClicado(false);
          props.tiranum(props.index);
          pintarmarcados();
        }else{
          setClicado(true);
          props.recebenum(props.index);
          pintarmarcados();
        }
    }

    function pintarmarcados(num){
      if(props.semana.includes(num)){
        return "clicado";
      }
      if(clicado){
        return "clicado";
      }else{
        return "";
      }
    }
  
  return(
    <>
      <button onClick = {clicando} className={pintarmarcados(props.index)} disabled = {props.desliga}> 
        <h1> 
            {props.dia} 
        </h1> 
      </button>
    </>
  );
}