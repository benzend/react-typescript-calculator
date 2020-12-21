import { Box } from "@material-ui/core";

interface Props {
  children: any;
}

export const ButtonsLayout = ({ children }: Props) => {
  return <Box>{children}</Box>;
};
