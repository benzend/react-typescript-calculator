import { Button } from "@material-ui/core";

interface Props {
  op: string;
  opHandler: any;
}

export const Operator = ({ op, opHandler }: Props) => {
  return (
    <Button variant="contained" color="primary" onClick={() => opHandler(op)}>
      {op}
    </Button>
  );
};
