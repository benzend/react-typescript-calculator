import { useEffect, useState } from "react";
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

  const [currentOperations, setCurrentOperations] = useState(["", "", ""]);
  const [totalHistory, setTotalHistory] = useState([]);
  const [currentTotal, setCurrentTotal] = useState("");

  useEffect(() => {
    const numberOne = numeral(currentOperations[0]);
    const op = currentOperations[1];
    const nakedNumberOne = parseFloat(currentOperations[0]);
    const nakedNumberTwo = parseFloat(currentOperations[2]);
    if (!isNaN(nakedNumberTwo)) {
      if (op === "+") {
        const total = numberOne.add(nakedNumberTwo).value().toString();
        setCurrentTotal(total);
      } else if (op === "-") {
        const total = numberOne.subtract(nakedNumberTwo).value().toString();
        setCurrentTotal(total);
      } else if (op === "*") {
        const total = numberOne.multiply(nakedNumberTwo).value().toString();
        setCurrentTotal(total);
      } else if (op === "/") {
        const total = numberOne.divide(nakedNumberTwo).value().toString();
        setCurrentTotal(total);
      } else if (op === "^") {
        const total = Math.pow(nakedNumberOne, nakedNumberTwo).toString();
        setCurrentTotal(total);
      }
    }
  }, [currentOperations]);

  return (
    <div>
      <h1>React Calculator</h1>
      <Display
        currentDisplay={currentOperations}
        totalHistory={totalHistory}
        currentTotal={currentTotal}
      />
      <Grid container>
        {operations.map((operation) => (
          <Operation
            key={operation}
            operation={operation}
            currentOperations={currentOperations}
            setCurrentOperations={setCurrentOperations}
            setTotalHistory={setTotalHistory}
            currentTotal={currentTotal}
            setCurrentTotal={setCurrentTotal}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Calculator;
