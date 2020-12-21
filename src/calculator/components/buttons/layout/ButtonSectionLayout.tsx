import { Box } from "@material-ui/core";
import { ChildrenOnlyProps } from "../../../layout/CalculatorLayout";

export const ButtonSectionLayout = ({ children }: ChildrenOnlyProps) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="flex-start"
      alignItems="center"
      margin="4px 0"
    >
      {children}
    </Box>
  );
};
