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
  num: number;
  currentNum1: number | null;
  setCurrentNum1: any;
  setCurrentNum2: any;
}

export const Number = ({
  num,
  currentNum1,
  setCurrentNum1,
  setCurrentNum2,
}: Props) => {
  const classes = useStyles();
  return (
    <Box
      onClick={() => {
        if (currentNum1 === null) {
          setCurrentNum1(num);
        } else {
          setCurrentNum2(num);
        }
      }}
      className={classes.root}
    >
      {num}
    </Box>
  );
};
