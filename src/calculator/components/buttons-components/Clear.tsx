import { Button } from "@material-ui/core";

interface Props {
  reset: any;
}

export const Clear = ({ reset }: Props) => {
  return (
    <Button variant="contained" color="primary" onClick={reset}>
      CLR
    </Button>
  );
};
