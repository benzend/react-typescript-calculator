import { useState } from "react";
import { Grid } from "@material-ui/core";
import numeral from "numeral";

import Operation from "./Operation";
import Display from "./Display";

const Calculator = () => {
  const operations = [
    "CLR",
    "=",
    "+",
    "-",
    "/",
    "*",
    "^",
    ".",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  const [currentOperation, setCurrentOperation] = useState([]);

  return (
    <div>
      <h1>this is a calculator</h1>
      <Display currentDisplay={currentOperation} />
      <Grid container>
        {operations.map((operation) => (
          <Operation key={operation} operation={operation} />
        ))}
      </Grid>
    </div>
  );
};

export default Calculator;
