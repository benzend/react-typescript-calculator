import { Box, makeStyles } from "@material-ui/core";

interface Props {
  children: React.AllHTMLAttributes<any>;
}

const useStyles = makeStyles(() => ({
  root: {
    margin: "3px",
  },
}));

export const ButtonLayout = ({ children }: Props) => {
  const { root } = useStyles();
  return <Box className={root}>{children}</Box>;
};
