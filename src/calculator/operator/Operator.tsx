import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "70px",
    width: "70px",
    background: "pink",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
  },
}));

interface Props {
  op: string;
  doshit: any;
  currentNum1: number | null;
  currentNum2: number | null;
  total: number;
  setTotal: any;
}

export const Operator = ({
  total,
  setTotal,
  currentNum1,
  currentNum2,
  doshit,
  op,
}: Props) => {
  if (op === "+" && currentNum2 !== null) {
    const newTotal = doshit.add(currentNum1, currentNum2);
    setTotal(newTotal);
  }
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <p>{op}</p>
    </Box>
  );
};
