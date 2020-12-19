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
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const ops = ["+", "-", "%", "*"];
  const [currentNum1, setCurrentNum1] = useState<any>("");
  const [currentNum2, setCurrentNum2] = useState<any>("");
  const [total, setTotal] = useState(0);
  const [currentOperator, setCurrentOperator] = useState("");
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
    if (currentOperator === "+" && currentNum2 !== null) {
      const unstringed: number[] = [
        parseInt(currentNum1),
        parseInt(currentNum2),
      ];
      const newTotal = doshit.add(unstringed);
      setTotal(newTotal);
    } else if (currentOperator === "-" && currentNum2 !== null) {
      const unstringed: number[] = [
        parseInt(currentNum1),
        parseInt(currentNum2),
      ];
      const newTotal = doshit.subtract(unstringed);
      setTotal(newTotal);
    } else if (currentOperator === "%" && currentNum2 !== null) {
      const unstringed: number[] = [
        parseInt(currentNum1),
        parseInt(currentNum2),
      ];
      const newTotal = doshit.divide(unstringed);
      setTotal(newTotal);
    } else if (currentOperator === "*" && currentNum2 !== null) {
      const unstringed: number[] = [
        parseInt(currentNum1),
        parseInt(currentNum2),
      ];
      const newTotal = doshit.multiply(unstringed);
      setTotal(newTotal);
    }
  };
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
