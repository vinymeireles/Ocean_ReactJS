import React from "react";
import ReactDOM from "react-dom";
import HelloWord  from "./components/HelloWord";

ReactDOM.render(
  <HelloWord 
  nome={"Viny"} 
  sobrenome={"Meireles"}
  /> 
,  
  document.getElementById('root')
)

