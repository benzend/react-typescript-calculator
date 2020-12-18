import { useState } from "react";
import { makeStyles, Box } from "@material-ui/core";

import { Display } from "./display/Display";
import { Operator } from "./operator/Operator";
import { Number } from "./number/Number";

const useStyles = makeStyles(() => ({
  root: {
    height: "500px",
    width: "500px",
    background: "lightBlue",
  },
  numbersStyle: {
    width: "50%",
    heigth: "50%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr",
    gridRowGap: "10px",
    gridColumnGap: "10px",
    justifyItems: "stretch",
    alignItems: "stretch",
  },
  operatorsStyle: {
    display: "flex",
    justifyItems: "space-around",
    alignItems: "center",
  },
}));

// We're going to store all state and data in here
export const Calculator = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const ops = ["+", "-", "%", "*"];
  const [currentNum1, setCurrentNum1] = useState(null);
  const [currentNum2, setCurrentNum2] = useState(null);
  const [total, setTotal] = useState(0);
  const [currentOperator, setCurrentOperator] = useState("");
  const classes = useStyles();
  function add(num1: number, num2: number) {
    return num1 + num2;
  }
  function subtract(num1: number, num2: number) {
    return num1 - num2;
  }
  function multiply(num1: number, num2: number) {
    return num1 * num2;
  }
  function divide(num1: number, num2: number) {
    return num1 / num2;
  }
  return (
    <Box className={classes.root}>
      <Display
        currentNum1={currentNum1}
        currentNum2={currentNum2}
        currentOperator={currentOperator}
        total={total}
      />
      <Box className={classes.numbersStyle}>
        {nums.map((num: number) => (
          <Number num={num} />
        ))}
      </Box>
      <Box className={classes.operatorsStyle}>
        {ops.map((op: string) => (
          <Operator op={op} />
        ))}
      </Box>
    </Box>
  );
};
