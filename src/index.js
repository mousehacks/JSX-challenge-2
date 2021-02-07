import React from "react";
import ReactDOM from "react-dom";

const fName = "Nadine";
const lName = "Krause";
const date = new Date();

ReactDOM.render(
  <div>
    <p>
      Created by {fName} {lName}
    </p>
    <p>Copyright {date.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
