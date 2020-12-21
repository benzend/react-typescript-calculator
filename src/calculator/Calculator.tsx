// React
import { useState } from "react";

// External Packages
import { Typography } from "@material-ui/core";

// Components
import { Display } from "./components/Display";
import { Buttons } from "./components/Buttons";

// Styles
import { CalculatorLayout } from "./layout/CalculatorLayout";
import { CalcSectionLayout } from "./layout/CalcSectionLayout";

// Utility
import { handleOps } from "../utils/utils";

export const Calculator = () => {
  // State
  const [currentNum1, setCurrentNum1] = useState<string>("");
  const [currentNum2, setCurrentNum2] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [currentOperator, setCurrentOperator] = useState<string>("");

  // Functions
  const { add, subtract, divide, multiply, toThePowerOf } = handleOps;
  function totalOfTwoStrings(
    string1: string,
    string2: string,
    operation: string
  ) {
    const numberified: number[] = [parseFloat(string1), parseFloat(string2)];
    let total: number;
    if (operation === "+") {
      total = add(numberified);
    } else if (operation === "-") {
      total = subtract(numberified);
    } else if (operation === "/") {
      total = divide(numberified);
    } else if (operation === "*") {
      total = multiply(numberified);
    } else if (operation === "^") {
      total = toThePowerOf(numberified);
    } else {
      total = 0;
    }
    return total;
  }

  return (
    <CalculatorLayout>
      <Typography variant="h2" component="h1">
        React Calculator
      </Typography>
      <CalcSectionLayout>
        <Display
          currentNum1={currentNum1}
          currentNum2={currentNum2}
          currentOperator={currentOperator}
          total={total}
        />
      </CalcSectionLayout>
      <Buttons
        setTotal={setTotal}
        setCurrentNum1={setCurrentNum1}
        setCurrentNum2={setCurrentNum2}
        setCurrentOperator={setCurrentOperator}
        currentOperator={currentOperator}
        currentNum1={currentNum1}
        currentNum2={currentNum2}
        totalOfTwoStrings={totalOfTwoStrings}
      />
    </CalculatorLayout>
  );
};
