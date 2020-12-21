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
} from "./buttons/components";
import { ButtonsLayout } from "./buttons/layout/ButtonsLayout";

interface Props {
  currentNum1: string;
  currentNum2: string;
  setCurrentNum1: Function;
  setCurrentNum2: Function;
  currentOperator: string;
  setCurrentOperator: Function;
  setTotal: Function;
  totalOfTwoStrings: Function;
}

export const Buttons = ({
  setTotal,
  setCurrentNum1,
  setCurrentNum2,
  setCurrentOperator,
  currentOperator,
  currentNum1,
  currentNum2,
  totalOfTwoStrings,
}: Props) => {
  // Data
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const ops = ["+", "-", "/", "*", "^"];

  // Functions
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
    if (currentNum2 !== "") {
      ops.forEach((op) => {
        if (currentOperator === op) {
          const newTotal = totalOfTwoStrings(currentNum1, currentNum2, op);
          setCurrentNum1(newTotal.toString());
          setTotal(newTotal);
        }
      });
    } else {
      alert('Try using the "+" operator and inputting a second number!');
    }
    setCurrentNum2("");
    setCurrentOperator("");
  };

  return (
    <ButtonsLayout>
      <Box>
        {nums.map((num: string) => (
          <Number
            key={"button" + num}
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
          <Operator key={op} opHandler={opHandler} op={op} />
        ))}
        <NegativeInt negativeHandler={negativeHandler} />
      </Box>
      <Box>
        <Equals equalsHandler={equalsHandler} />
        <Clear reset={reset} />
      </Box>
    </ButtonsLayout>
  );
};
