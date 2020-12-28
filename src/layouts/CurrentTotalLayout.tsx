import { Box } from "@material-ui/core";

interface Props {
  children: React.AllHTMLAttributes<string>;
}

export const CurrentTotalLayout = ({ children }: Props) => {
  return <Box>{children}</Box>;
};
