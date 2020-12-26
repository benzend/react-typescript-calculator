import { Button, Grid } from "@material-ui/core";

interface Props {
  operation: string;
}

const Operation = ({ operation }: Props) => {
  return (
    <Grid item>
      <Button color="primary" variant="contained">
        {operation}
      </Button>
    </Grid>
  );
};

export default Operation;
