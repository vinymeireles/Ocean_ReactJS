import React from "react";
import ReactDOM from "react-dom";
import {HelloWord, DadosPessoais}  from "./components/HelloWord";

ReactDOM.render(
  /* <HelloWord 
  nome={"Viny"} 
  sobrenome={"Meireles"}
  /> , */

  <DadosPessoais
  idade={"40"}
  cpf={"054.123.654-00"}
  email={"vinycode@gmail.com"} 
  />
,  
  document.getElementById('root')
)