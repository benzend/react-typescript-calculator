// React
import { useState } from "react";

// External Packages
import { Box } from "@material-ui/core";

// Components
import { Display } from "./components/Display";
import { Operator } from "./components/Operator";
import { Number } from "./components/Number";
import { Equals } from "./components/Equals";
import { NegativeInt } from "./components/NegativeInt";
import { Dot } from "./components/Dot";

// Utils
import { handleOps } from "../utils/utils";
import { Clear } from "./components/Clear";

export const Calculator = () => {
  // Data
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const ops = ["+", "-", "%", "*"];

  //State
  const [currentNum1, setCurrentNum1] = useState<string>("");
  const [currentNum2, setCurrentNum2] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [currentOperator, setCurrentOperator] = useState<string>("");

  //Style

  // Functions
  const { add, subtract, divide, multiply } = handleOps;
  const equalsHandler = () => {
    if (currentOperator === "+" && currentNum2 !== "") {
      const unstringed: number[] = [
        parseFloat(currentNum1),
        parseFloat(currentNum2),
      ];
      const newTotal = add(unstringed);
      setCurrentNum1(newTotal.toString());
      setTotal(newTotal);
    } else if (currentOperator === "-" && currentNum2 !== "") {
      const unstringed: number[] = [
        parseFloat(currentNum1),
        parseFloat(currentNum2),
      ];
      const newTotal = subtract(unstringed);
      setCurrentNum1(newTotal.toString());
      setTotal(newTotal);
    } else if (currentOperator === "%" && currentNum2 !== "") {
      const unstringed: number[] = [
        parseFloat(currentNum1),
        parseFloat(currentNum2),
      ];
      const newTotal = divide(unstringed);
      setCurrentNum1(newTotal.toString());
      setTotal(newTotal);
    } else if (currentOperator === "*" && currentNum2 !== "") {
      const unstringed: number[] = [
        parseFloat(currentNum1),
        parseFloat(currentNum2),
      ];
      const newTotal = multiply(unstringed);
      setCurrentNum1(newTotal.toString());
      setTotal(newTotal);
    } else {
      alert(
        "You have to have at least two number to do anything. Try using '+' and typing in a number afterwards"
      );
    }

    setCurrentNum2("");
    setCurrentOperator("");
  };
  const reset = () => {
    setTotal(0);
    setCurrentNum1("");
    setCurrentNum2("");
    setCurrentOperator("");
  };
  const negativeHandler = () => {
    if (currentOperator === "") {
      setCurrentNum1((prev) => (parseFloat(prev) * -1).toString());
    } else {
      setCurrentNum2((prev) => (parseFloat(prev) * -1).toString());
    }
  };

  const addDot = () => {
    if (currentOperator === "" && !currentNum1.includes(".")) {
      setCurrentNum1((prev) => prev + ".");
    } else if (currentOperator && !currentNum2.includes(".")) {
      setCurrentNum2((prev) => prev + ".");
    }
  };

  return (
    <Box>
      <Box>
        <Display
          currentNum1={currentNum1}
          currentNum2={currentNum2}
          currentOperator={currentOperator}
          total={total}
        />
      </Box>
      <Box>
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
        <Dot addDot={addDot} />
      </Box>
      <Box>
        {ops.map((op: string) => (
          <Operator setCurrentOperator={setCurrentOperator} op={op} />
        ))}
        <NegativeInt negativeHandler={negativeHandler} />
      </Box>
      <Box>
        <Equals equalsHandler={equalsHandler} />
        <Clear reset={reset} />
      </Box>
    </Box>
  );
};
