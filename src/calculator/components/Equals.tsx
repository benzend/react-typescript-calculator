import { Button } from "@material-ui/core";

interface Props {
  equalsHandler: any;
}

export const Equals = ({ equalsHandler }: Props) => {
  return <Button onClick={equalsHandler}>=</Button>;
};
