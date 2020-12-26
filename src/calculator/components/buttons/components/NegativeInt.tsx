// External Packages
import { Button } from "@material-ui/core";

// Styles
import { ButtonLayout } from "../layout/ButtonLayout";

interface Props {
  negativeHandler: () => void;
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
