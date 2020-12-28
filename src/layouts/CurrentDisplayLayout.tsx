import { Box, makeStyles } from "@material-ui/core";

interface Props {
  children: React.AllHTMLAttributes<string>;
}

const useStyles = makeStyles(() => ({
  root: {
    background: "#ddd",
    height: "40px",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  inner: {
    marginLeft: "3px",
  },
}));

export const CurrentDisplayLayout = ({ children }: Props) => {
  const { root, inner } = useStyles();
  return (
    <Box className={root}>
      <Box className={inner}>{children}</Box>
    </Box>
  );
};
