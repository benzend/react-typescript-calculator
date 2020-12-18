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
}

export const Number = ({ num }: Props) => {
  const classes = useStyles();
  return <Box className={classes.root}>{num}</Box>;
};
