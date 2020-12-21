import { Box } from "@material-ui/core";
import { ChildrenOnlyProps } from "./CalculatorLayout";

export const CalcSectionLayout = ({ children }: ChildrenOnlyProps) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      {children}
    </Box>
  );
};
