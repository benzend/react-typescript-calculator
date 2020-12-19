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
}: Props) => {
  return (
    <>
      {currentNum1 ? (
        <h2>
          <span> {currentNum1} </span>
          <span> {currentOperator} </span>
          <span> {currentNum2} </span>
        </h2>
      ) : (
        <h2>0</h2>
      )}
    </>
  );
};
