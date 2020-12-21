import { Box, makeStyles } from "@material-ui/core";

export interface ChildrenOnlyProps {
  children: any;
}

// Styles
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

export const CalculatorLayout = ({ children }: ChildrenOnlyProps) => {
  const { root } = useStyles();
  return <Box className={root}>{children}</Box>;
};
