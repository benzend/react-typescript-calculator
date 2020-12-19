import { Button } from "@material-ui/core";

interface Props {
  op: string;
  setCurrentOperator: Function;
}

export const Operator = ({ op, setCurrentOperator }: Props) => {
  return <Button onClick={() => setCurrentOperator(op)}>{op}</Button>;
};
