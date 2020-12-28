import { Box, makeStyles } from "@material-ui/core";

interface Props {
  children: React.AllHTMLAttributes<any>;
}

const useStyles = makeStyles(() => ({
  root: {
    width: "210px",
    height: "500px",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export const EntireCalculatorLayout = ({ children }: Props) => {
  const { root } = useStyles();
  return <Box className={root}>{children}</Box>;
};
