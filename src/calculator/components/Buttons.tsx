import { Box } from "@material-ui/core";
import { handleOps } from "../../utils/utils";

import { Clear } from "./buttons-components/Clear";
import { Dot } from "./buttons-components/Dot";
import { Equals } from "./buttons-components/Equals";
import { NegativeInt } from "./buttons-components/NegativeInt";
import { Operator } from "./buttons-components/Operator";
import { Number } from "./buttons-components/Number";

interface Props {
  currentNum1: string;
  currentNum2: string;
  setCurrentNum1: Function;
  setCurrentNum2: Function;
  currentOperator: string;
  setCurrentOperator: Function;
  setTotal: Function;
}

export const Buttons = ({
  setTotal,
  setCurrentNum1,
  setCurrentNum2,
  setCurrentOperator,
  currentOperator,
  currentNum1,
  currentNum2,
}: Props) => {
  // Data
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const ops = ["+", "-", "%", "*"];

  // Functions
  const { add, subtract, divide, multiply } = handleOps;
  const reset = () => {
    setTotal(0);
    setCurrentNum1("");
    setCurrentNum2("");
    setCurrentOperator("");
  };
  const negativeHandler = () => {
    if (currentOperator === "") {
      setCurrentNum1((prev: string) => (parseFloat(prev) * -1).toString());
    } else {
      setCurrentNum2((prev: string) => (parseFloat(prev) * -1).toString());
    }
  };
  const addDot = () => {
    if (currentOperator === "" && !currentNum1.includes(".")) {
      setCurrentNum1((prev: string) => prev + ".");
    } else if (currentOperator && !currentNum2.includes(".")) {
      setCurrentNum2((prev: string) => prev + ".");
    }
  };
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

  return (
    <>
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
    </>
  );
};
