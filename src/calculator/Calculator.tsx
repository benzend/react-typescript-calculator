// React
import { useState } from "react";

// External Packages
import { Box } from "@material-ui/core";

// Components
import { Display } from "./components/Display";
import { Buttons } from "./components/Buttons";

export const Calculator = () => {
  //State
  const [currentNum1, setCurrentNum1] = useState<string>("");
  const [currentNum2, setCurrentNum2] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [currentOperator, setCurrentOperator] = useState<string>("");

  return (
    <Box>
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
