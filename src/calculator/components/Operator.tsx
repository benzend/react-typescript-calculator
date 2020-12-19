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
  setCurrentOperator: Function;
}

export const Operator = ({ op, setCurrentOperator }: Props) => {
  const classes = useStyles();
  return (
    <Box onClick={() => setCurrentOperator(op)} className={classes.root}>
      <p>{op}</p>
    </Box>
  );
};
