import React from "react";
import ReactDOM from "react-dom";

const fName = "Nadine";
const lName = "Krause";
const date = new Date();
const year = date.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {fName} {lName}</p>
    <p>Copyright {year}</p>
  </div>, 
  document.getElementById("root"));
