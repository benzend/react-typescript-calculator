import { Box } from "@material-ui/core";

interface Props {
  children: any;
}

export const ButtonsLayout = ({ children }: Props) => {
  return (
    <Box maxWidth="250px" display="flex" flexDirection="column">
      {children}
    </Box>
  );
};
