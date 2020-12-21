import { Button } from "@material-ui/core";

interface Props {
  negativeHandler: any;
}

export const NegativeInt = ({ negativeHandler }: Props) => {
  return (
    <Button variant="contained" color="primary" onClick={negativeHandler}>
      +/-
    </Button>
  );
};
