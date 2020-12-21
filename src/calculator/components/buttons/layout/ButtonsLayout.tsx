import { Box } from "@material-ui/core";
import { ChildrenOnlyProps } from "../../../layout/CalculatorLayout";

export const ButtonsLayout = ({ children }: ChildrenOnlyProps) => {
  return (
    <Box maxWidth="250px" display="flex" flexDirection="column">
      {children}
    </Box>
  );
};
