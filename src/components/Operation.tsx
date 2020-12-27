import numeral from "numeral";
import { Button, Grid } from "@material-ui/core";

interface Props {
  operation: string;
  currentOperations: string[];
  setCurrentOperations: Function;
}

const Operation = ({
  operation,
  currentOperations,
  setCurrentOperations,
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
