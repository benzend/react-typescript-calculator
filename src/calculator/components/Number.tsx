import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "70px",
    width: "70px",
    background: "lightGreen",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

interface Props {
  num: string;
  currentNum1: string;
  currentNum2: string;
  setCurrentNum1: Function;
  setCurrentNum2: Function;
  currentOperator: string;
}

export const Number = ({
  num,
  currentNum1,
  currentNum2,
  setCurrentNum1,
  setCurrentNum2,
  currentOperator,
}: Props) => {
  const classes = useStyles();
  return (
    <Box
      onClick={() => {
        if (currentOperator === "") {
          setCurrentNum1(currentNum1 + num);
        } else {
          setCurrentNum2(currentNum2 + num);
        }
      }}
      className={classes.root}
    >
      {num}
    </Box>
  );
};
