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

export const Number = ({ num }: any) => {
  const classes = useStyles();
  return <Box className={classes.root}>{num}</Box>;
};
