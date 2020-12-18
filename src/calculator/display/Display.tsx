interface Props {
  currentNum1: number | null;
  currentNum2: number | null;
  currentOperator: string;
  total: number;
}

export const Display = ({
  currentNum1,
  currentNum2,
  currentOperator,
  total,
}: Props) => {
  return (
    <>
      <h1>
        <span>{currentNum1}</span>
        <span>{currentNum2}</span>
        <span>{currentOperator}</span>
        <span>{total}</span>
      </h1>
    </>
  );
};
