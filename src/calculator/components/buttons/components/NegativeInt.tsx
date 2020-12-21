import { Button } from "@material-ui/core";
import { ButtonLayout } from "../layout/ButtonLayout";

interface Props {
  negativeHandler: any;
}

export const NegativeInt = ({ negativeHandler }: Props) => {
  return (
    <ButtonLayout>
      <Button variant="contained" color="primary" onClick={negativeHandler}>
        +/-
      </Button>
    </ButtonLayout>
  );
};
