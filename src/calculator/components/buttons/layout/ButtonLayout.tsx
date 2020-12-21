import { Box } from "@material-ui/core";
import { ChildrenOnlyProps } from "../../../layout/CalculatorLayout";

export const ButtonLayout = ({ children }: ChildrenOnlyProps) => {
  return <Box margin="3px">{children}</Box>;
};
