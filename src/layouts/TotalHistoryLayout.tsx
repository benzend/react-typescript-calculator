import { Box, makeStyles } from "@material-ui/core";

interface Props {
  children: any;
  totalHistory: string[];
}

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "0",
    overflow: "hidden",
    transition: "all .8s ease",
    "&.active": {
      height: "100px",
    },
  },
}));

export const TotalHistoryLayout = ({ children, totalHistory }: Props) => {
  const { root } = useStyles();
  return (
    <Box className={totalHistory[0] ? root + " active" : root}>{children}</Box>
  );
};
