import { Box, makeStyles } from "@material-ui/core";

interface Props {
  children: React.AllHTMLAttributes<string>;
  totalHistory: string[];
}

const useStyles = makeStyles(() => ({
  root: {
    height: "0",
    transition: "all .8s ease",
    "&.active": {
      height: "40px",
    },
  },
}));

export const TotalHistoryLayout = ({ children, totalHistory }: Props) => {
  const { root } = useStyles();
  return (
    <Box className={totalHistory[0] ? root + " active" : root}>{children}</Box>
  );
};
