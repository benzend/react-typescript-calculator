import { Button } from "@material-ui/core";
import { ButtonLayout } from "../layout/ButtonLayout";

interface Props {
  reset: any;
}

export const Clear = ({ reset }: Props) => {
  return (
    <ButtonLayout>
      <Button
        className="button"
        variant="contained"
        color="primary"
        onClick={reset}
      >
        CLR
      </Button>
    </ButtonLayout>
  );
};
