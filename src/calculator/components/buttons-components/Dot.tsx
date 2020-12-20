import { Button } from "@material-ui/core";

interface Props {
  addDot: any;
}

export const Dot = ({ addDot }: Props) => {
  return (
    <Button className="button" variant="contained" onClick={addDot}>
      .
    </Button>
  );
};
