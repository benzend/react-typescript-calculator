import { useState } from "react";
import { Grid } from "@material-ui/core";

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

  const [currentOperations, setCurrentOperations] = useState(["", "", ""]);

  return (
    <div>
      <h1>React Calculator</h1>
      <Display currentDisplay={currentOperations} />
      <Grid container>
        {operations.map((operation) => (
          <Operation
            key={operation}
            operation={operation}
            currentOperations={currentOperations}
            setCurrentOperations={setCurrentOperations}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Calculator;
