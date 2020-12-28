import numeral from "numeral";
import { Button, Grid } from "@material-ui/core";

interface Props {
  operation: string;
  currentOperations: string[];
  setCurrentOperations: Function;
  setTotalHistory: Function;
}

const Operation = ({
  operation,
  currentOperations,
  setCurrentOperations,
  setTotalHistory,
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
      console.log("this is a number");
    } else if (operation === "=") {
      const firstNum: number = parseFloat(currentOperations[0]);
      const secondNum: number = parseFloat(currentOperations[2]);
      const numeralOne = numeral(firstNum);
      const numeralTwo = numeral(secondNum);
      if (currentOperations[1] === "+") {
        const total = numeralOne.add(secondNum).value();
        const stringedTotal: string = total.toString();
        setTotalHistory((prev: string[]) => [...prev, stringedTotal]);
        setCurrentOperations([stringedTotal, "", ""]);
      } else if (currentOperations[1] === "-") {
        const total = numeralOne.subtract(secondNum).value();
        const stringedTotal: string = total.toString();
        setTotalHistory((prev: string[]) => [...prev, stringedTotal]);
        setCurrentOperations([stringedTotal, "", ""]);
      } else if (currentOperations[1] === "/") {
        const total = numeralOne.divide(secondNum).value();
        const stringedTotal: string = total.toString();
        setTotalHistory((prev: string[]) => [...prev, stringedTotal]);
        setCurrentOperations([stringedTotal, "", ""]);
      } else if (currentOperations[1] === "*") {
        const total = numeralOne.multiply(secondNum).value();
        const stringedTotal: string = total.toString();
        setTotalHistory((prev: string[]) => [...prev, stringedTotal]);
        setCurrentOperations([stringedTotal, "", ""]);
      } else if (currentOperations[1] === "^") {
        const total = Math.pow(firstNum, secondNum);
        const stringedTotal: string = total.toString();
        setTotalHistory((prev: string[]) => [...prev, stringedTotal]);
        setCurrentOperations([stringedTotal, "", ""]);
      }
      console.log("this is =");
    } else if (operation === "+") {
      const ops = [...currentOperations];
      ops[1] += operation;
      setCurrentOperations(ops);
      console.log("this is +");
    } else if (operation === "-") {
      const ops = [...currentOperations];
      ops[1] += operation;
      setCurrentOperations(ops);
      console.log("this is -");
    } else if (operation === "/") {
      const ops = [...currentOperations];
      ops[1] += operation;
      setCurrentOperations(ops);
      console.log("this is /");
    } else if (operation === "*") {
      const ops = [...currentOperations];
      ops[1] += operation;
      setCurrentOperations(ops);
      console.log("this is *");
    } else if (operation === "^") {
      const ops = [...currentOperations];
      ops[1] += operation;
      setCurrentOperations(ops);
      console.log("this is ^");
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
      console.log("this is .");
    } else if (operation === "CLR") {
      setCurrentOperations(["", "", ""]);
      console.log("this is CLR");
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
