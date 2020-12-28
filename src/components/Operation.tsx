import numeral from "numeral";
import { Button, Grid } from "@material-ui/core";

interface Props {
  operation: string;
  currentOperations: string[];
  setCurrentOperations: Function;
  setTotalHistory: Function;
  currentTotal: string;
  setCurrentTotal: Function;
}

const Operation = ({
  operation,
  currentOperations,
  setCurrentOperations,
  setTotalHistory,
  currentTotal,
  setCurrentTotal,
}: Props) => {
  const clickHandler = () => {
    const parsedOp = parseFloat(operation);
    if (!isNaN(parsedOp)) {
      if (currentOperations[1] === "") {
        const ops = [...currentOperations];
        ops[0] += operation;
        setCurrentOperations(ops);
      } else {
        const ops = [...currentOperations];
        ops[2] += operation;
        setCurrentOperations(ops);
      }
    } else if (operation === "=") {
      const firstNum: number = parseFloat(currentOperations[0]);
      const secondNum: number = parseFloat(currentOperations[2]);
      const numeralOne = numeral(firstNum);
      if (currentOperations[1] === "+") {
        const total = numeralOne.add(secondNum).value();
        const stringedTotal: string = total.toString();
        setTotalHistory((prev: string[]) => [...prev, stringedTotal]);
        setCurrentOperations([stringedTotal, "", ""]);
        setCurrentTotal("");
      } else if (currentOperations[1] === "-") {
        const total = numeralOne.subtract(secondNum).value();
        const stringedTotal: string = total.toString();
        setTotalHistory((prev: string[]) => [...prev, stringedTotal]);
        setCurrentOperations([stringedTotal, "", ""]);
        setCurrentTotal("");
      } else if (currentOperations[1] === "/") {
        const total = numeralOne.divide(secondNum).value();
        const stringedTotal: string = total.toString();
        setTotalHistory((prev: string[]) => [...prev, stringedTotal]);
        setCurrentOperations([stringedTotal, "", ""]);
        setCurrentTotal("");
      } else if (currentOperations[1] === "*") {
        const total = numeralOne.multiply(secondNum).value();
        const stringedTotal: string = total.toString();
        setTotalHistory((prev: string[]) => [...prev, stringedTotal]);
        setCurrentOperations([stringedTotal, "", ""]);
        setCurrentTotal("");
      } else if (currentOperations[1] === "^") {
        const total = Math.pow(firstNum, secondNum);
        const stringedTotal: string = total.toString();
        setTotalHistory((prev: string[]) => [...prev, stringedTotal]);
        setCurrentOperations([stringedTotal, "", ""]);
        setCurrentTotal("");
      }
    } else if (operation === "+") {
      const ops = [...currentOperations];
      ops[1] += operation;
      setCurrentOperations(ops);
    } else if (operation === "-") {
      const ops = [...currentOperations];
      ops[1] += operation;
      setCurrentOperations(ops);
    } else if (operation === "/") {
      const ops = [...currentOperations];
      ops[1] += operation;
      setCurrentOperations(ops);
    } else if (operation === "*") {
      const ops = [...currentOperations];
      ops[1] += operation;
      setCurrentOperations(ops);
    } else if (operation === "^") {
      const ops = [...currentOperations];
      ops[1] += operation;
      setCurrentOperations(ops);
    } else if (operation === ".") {
      if (currentOperations[1] === "" && !currentOperations[0].includes(".")) {
        const ops = [...currentOperations];
        ops[0] += operation;
        setCurrentOperations(ops);
      } else if (
        currentOperations[1] !== "" &&
        !currentOperations[2].includes(".")
      ) {
        const ops = [...currentOperations];
        ops[2] += operation;
        setCurrentOperations(ops);
      }
    } else if (operation === "CLR") {
      setCurrentOperations(["", "", ""]);
    }
  };
  return (
    <Grid item>
      <Button onClick={clickHandler} color="primary" variant="contained">
        {operation}
      </Button>
    </Grid>
  );
};

export default Operation;
