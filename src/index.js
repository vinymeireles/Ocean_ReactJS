import React from "react";
import ReactDOM from "react-dom";
import Calendario from "./components/Calendario/Calendario";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

ReactDOM.render(
  <div>
  <p><Calendario /></p>
  <p><Calendar /></p>
  </div>
  ,
  document.getElementById('root')
)