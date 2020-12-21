import { Box } from "@material-ui/core";
import { ChildrenOnlyProps } from "../../../layout/CalculatorLayout";

export const ButtonsLayout = ({ children }: ChildrenOnlyProps) => {
  return (
    <Box maxWidth="210px" margin="4px 0" display="flex" flexDirection="column">
      {children}
    </Box>
  );
};
