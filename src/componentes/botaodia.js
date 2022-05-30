import React from "react";

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
      <button onClick = {clicando} className={(clicado)? "clicado" : ""} disabled = {props.desliga}> 
        <h1> 
            {props.dia} 
        </h1> 
      </button>
    </>
  );
}