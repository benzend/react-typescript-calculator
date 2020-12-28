import { Card, Box, makeStyles } from "@material-ui/core";

interface Props {
  children: React.AllHTMLAttributes<any>;
}

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    background: "#f4f4f4",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "3px 3px 10px #0005",
  },
  inner: {
    width: "210px",
  },
}));

export const EntireCalculatorLayout = ({ children }: Props) => {
  const { root, inner } = useStyles();
  return (
    <Card className={root}>
      <Box className={inner}>{children}</Box>
    </Card>
  );
};
