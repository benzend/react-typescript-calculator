import { Box } from "@material-ui/core";

interface Props {
  children: React.AllHTMLAttributes<string>;
}

export const TotalHistoryLayout = ({ children }: Props) => {
  return <Box>{children}</Box>;
};
