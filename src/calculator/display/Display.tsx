interface Props {
  currentNum1: string;
  currentNum2: string;
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
      {currentNum1 ? (
        <h1>
          <span> {currentNum1} </span>
          <span> {currentOperator} </span>
          <span> {currentNum2} </span>
        </h1>
      ) : (
        <h1>0</h1>
      )}
    </>
  );
};
