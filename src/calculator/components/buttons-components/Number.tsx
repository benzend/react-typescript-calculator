import { Button } from "@material-ui/core";

interface Props {
  num: string;
  currentNum1: string;
  currentNum2: string;
  setCurrentNum1: Function;
  setCurrentNum2: Function;
  currentOperator: string;
}

export const Number = ({
  num,
  currentNum1,
  currentNum2,
  setCurrentNum1,
  setCurrentNum2,
  currentOperator,
}: Props) => {
  return (
    <Button
      className="button"
      variant="contained"
      onClick={() => {
        if (currentOperator === "") {
          setCurrentNum1(currentNum1 + num);
        } else {
          setCurrentNum2(currentNum2 + num);
        }
      }}
    >
      {num}
    </Button>
  );
};
