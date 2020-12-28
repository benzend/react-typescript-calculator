import { Box, makeStyles } from "@material-ui/core";

interface Props {
  children: React.AllHTMLAttributes<string>;
  currentTotal: string;
}

const useStyles = makeStyles(() => ({
  root: {
    height: "0px",
    overflow: "hidden",
    opacity: 0,
    transition: "all .7s ease",
    "&.active": {
      height: "30px",
      opacity: 1,
    },
  },
}));

export const CurrentTotalLayout = ({ children, currentTotal }: Props) => {
  const { root } = useStyles();
  return (
    <Box className={currentTotal !== "" ? root + " active" : root}>
      {children}
    </Box>
  );
};
