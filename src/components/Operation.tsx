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
      if (currentOperations[1] === "+") {
        setTotalHistory((prev: string[]) => [...prev, currentTotal]);
        setCurrentOperations([currentTotal, "", ""]);
        setCurrentTotal("");
      } else if (currentOperations[1] === "-") {
        setTotalHistory((prev: string[]) => [...prev, currentTotal]);
        setCurrentOperations([currentTotal, "", ""]);
        setCurrentTotal("");
      } else if (currentOperations[1] === "/") {
        setTotalHistory((prev: string[]) => [...prev, currentTotal]);
        setCurrentOperations([currentTotal, "", ""]);
        setCurrentTotal("");
      } else if (currentOperations[1] === "*") {
        setTotalHistory((prev: string[]) => [...prev, currentTotal]);
        setCurrentOperations([currentTotal, "", ""]);
        setCurrentTotal("");
      } else if (currentOperations[1] === "^") {
        setTotalHistory((prev: string[]) => [...prev, currentTotal]);
        setCurrentOperations([currentTotal, "", ""]);
        setCurrentTotal("");
      }
    } else if (currentOperations[0] !== "" && currentOperations[1] === "") {
      if (operation === "+") {
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
      }
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
      setCurrentTotal("");
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
