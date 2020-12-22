// External Packages
import { Button } from "@material-ui/core";

// Styles
import { ButtonLayout } from "../layout/ButtonLayout";

interface Props {
  op: string;
  opHandler: any;
}

export const Operator = ({ op, opHandler }: Props) => {
  return (
    <ButtonLayout>
      <Button variant="contained" color="primary" onClick={() => opHandler(op)}>
        {op}
      </Button>
    </ButtonLayout>
  );
};
