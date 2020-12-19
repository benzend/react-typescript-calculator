import { Button } from "@material-ui/core";

interface Props {
  reset: any;
}

export const Clear = ({ reset }: Props) => {
  return <Button onClick={reset}>CLR</Button>;
};
