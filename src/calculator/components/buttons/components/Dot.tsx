// External Packages
import { Button } from "@material-ui/core";

// Styles
import { ButtonLayout } from "../layout/ButtonLayout";

interface Props {
  addDot: any;
}

export const Dot = ({ addDot }: Props) => {
  return (
    <ButtonLayout>
      <Button variant="contained" onClick={addDot}>
        .
      </Button>
    </ButtonLayout>
  );
};
