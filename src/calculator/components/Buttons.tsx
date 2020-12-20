// External Packages
import { Box } from "@material-ui/core";

// Components
import {
  Clear,
  Dot,
  Equals,
  NegativeInt,
  Operator,
  Number,
} from "./buttons-components";

// Utility
import { handleOps } from "../../utils/utils";

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
  const ops = ["+", "-", "/", "*"];

  // Functions

  // add, sub, divide, mult takes in an array
  const { add, subtract, divide, multiply } = handleOps;
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
    } else {
      total = 0;
    }
    return total;
  }
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
  const opHandler = (op: string) => {
    currentNum1 !== "" && setCurrentOperator(op);
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
      const newTotal = totalOfTwoStrings(currentNum1, currentNum2, "+");
      setCurrentNum1(newTotal.toString());
      setTotal(newTotal);
    } else if (currentOperator === "-" && currentNum2 !== "") {
      const newTotal = totalOfTwoStrings(currentNum1, currentNum2, "-");
      setCurrentNum1(newTotal.toString());
      setTotal(newTotal);
    } else if (currentOperator === "/" && currentNum2 !== "") {
      const newTotal = totalOfTwoStrings(currentNum1, currentNum2, "/");
      setCurrentNum1(newTotal.toString());
      setTotal(newTotal);
    } else if (currentOperator === "*" && currentNum2 !== "") {
      const newTotal = totalOfTwoStrings(currentNum1, currentNum2, "*");
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
          <Operator opHandler={opHandler} op={op} />
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
