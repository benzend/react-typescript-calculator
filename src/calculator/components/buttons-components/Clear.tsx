import { Button } from "@material-ui/core";

interface Props {
  reset: any;
}

export const Clear = ({ reset }: Props) => {
  return (
    <Button
      className="button"
      variant="contained"
      color="primary"
      onClick={reset}
    >
      CLR
    </Button>
  );
};
