// React
import { useState } from "react";

// External Packages
import { Box, Typography, makeStyles } from "@material-ui/core";

// Components
import { Display } from "./components/Display";
import { Buttons } from "./components/Buttons";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

export const Calculator = () => {
  //State
  const [currentNum1, setCurrentNum1] = useState<string>("");
  const [currentNum2, setCurrentNum2] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [currentOperator, setCurrentOperator] = useState<string>("");

  const { root } = useStyles();

  return (
    <Box className={root}>
      <Typography variant="h1">React Calculator</Typography>
      <Box>
        <Display
          currentNum1={currentNum1}
          currentNum2={currentNum2}
          currentOperator={currentOperator}
          total={total}
        />
      </Box>
      <Buttons
        setTotal={setTotal}
        setCurrentNum1={setCurrentNum1}
        setCurrentNum2={setCurrentNum2}
        setCurrentOperator={setCurrentOperator}
        currentOperator={currentOperator}
        currentNum1={currentNum1}
        currentNum2={currentNum2}
      />
    </Box>
  );
};
