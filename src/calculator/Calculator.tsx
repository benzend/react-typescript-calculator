import { useState } from "react";
import { makeStyles, Box } from "@material-ui/core";

import { Display } from "./display/Display";
import { Operator } from "./operator/Operator";
import { Number } from "./number/Number";
import { Equals } from "./Equals";

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
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "-"];
  const ops = ["+", "-", "%", "*", "clr"];
  const [currentNum1, setCurrentNum1] = useState<string>("");
  const [currentNum2, setCurrentNum2] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [currentOperator, setCurrentOperator] = useState<string>("");
  const classes = useStyles();
  const doshit = {
    add(arr: number[]) {
      return arr[0] + arr[1];
    },
    subtract(arr: number[]) {
      return arr[0] - arr[1];
    },
    divide(arr: number[]) {
      return arr[0] / arr[1];
    },
    multiply(arr: number[]) {
      return arr[0] * arr[1];
    },
  };

  const equalsHandler = () => {
    if (currentOperator === "+" && currentNum2 !== "") {
      const unstringed: number[] = [
        parseFloat(currentNum1),
        parseFloat(currentNum2),
      ];
      const newTotal = doshit.add(unstringed);
      setCurrentNum1(newTotal.toString());
      setTotal(newTotal);
    } else if (currentOperator === "-" && currentNum2 !== "") {
      const unstringed: number[] = [
        parseFloat(currentNum1),
        parseFloat(currentNum2),
      ];
      const newTotal = doshit.subtract(unstringed);
      setCurrentNum1(newTotal.toString());
      setTotal(newTotal);
    } else if (currentOperator === "%" && currentNum2 !== "") {
      const unstringed: number[] = [
        parseFloat(currentNum1),
        parseFloat(currentNum2),
      ];
      const newTotal = doshit.divide(unstringed);
      setCurrentNum1(newTotal.toString());
      setTotal(newTotal);
    } else if (currentOperator === "*" && currentNum2 !== "") {
      const unstringed: number[] = [
        parseFloat(currentNum1),
        parseFloat(currentNum2),
      ];
      const newTotal = doshit.multiply(unstringed);
      setCurrentNum1(newTotal.toString());
      setTotal(newTotal);
    }
    setCurrentNum2("");
    setCurrentOperator("");
  };

  if (currentOperator === "clr") {
    setTotal(0);
    setCurrentNum1("");
    setCurrentNum2("");
    setCurrentOperator("");
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
        {nums.map((num: string) => (
          <Number
            setCurrentNum1={setCurrentNum1}
            setCurrentNum2={setCurrentNum2}
            currentOperator={currentOperator}
            currentNum1={currentNum1}
            currentNum2={currentNum2}
            num={num}
          />
        ))}
      </Box>
      <Box className={classes.operatorsStyle}>
        {ops.map((op: string) => (
          <Operator setCurrentOperator={setCurrentOperator} op={op} />
        ))}
      </Box>
      <Equals equalsHandler={equalsHandler} />
    </Box>
  );
};
