// External Packages
import { Button } from "@material-ui/core";

// Styles
import { ButtonLayout } from "../layout/ButtonLayout";

interface Props {
  equalsHandler: any;
}

export const Equals = ({ equalsHandler }: Props) => {
  return (
    <ButtonLayout>
      <Button variant="contained" color="primary" onClick={equalsHandler}>
        =
      </Button>
    </ButtonLayout>
  );
};
