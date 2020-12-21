import { Button } from "@material-ui/core";
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
