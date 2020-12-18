import { makeStyles, Box } from "@material-ui/core";

import { Display } from "./display/Display";
import { Operator } from "./operator/Operator";
import { Number } from "./number/Number";

const useStyles = makeStyles(() => ({
  root: {
    height: "500px",
    width: "500px",
    background: "lightBlue",
  },
}));

// We're going to store all state and data in here
export const Calculator = () => {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const ops = ["+", "-", "%", "*"];
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Display />
      {nums.map((num: any) => (
        <Number num={num} />
      ))}
      {ops.map((op: string) => (
        <Operator op={op} />
      ))}
    </Box>
  );
};
