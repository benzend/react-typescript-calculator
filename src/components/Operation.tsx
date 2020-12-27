import { Button, Grid } from "@material-ui/core";

interface Props {
  operation: string;
}

const Operation = ({ operation }: Props) => {
  const clickHandler = () => {
    const parsedOp = parseFloat(operation);
    if (!isNaN(parsedOp)) {
      console.log("this is a number");
    } else if (operation === "=") {
      console.log("this is =");
    } else if (operation === "+") {
      console.log("this is +");
    } else if (operation === "-") {
      console.log("this is -");
    } else if (operation === "/") {
      console.log("this is /");
    } else if (operation === "*") {
      console.log("this is *");
    } else if (operation === "^") {
      console.log("this is ^");
    } else if (operation === ".") {
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
