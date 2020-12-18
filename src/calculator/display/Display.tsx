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
      <h1>
        {total === 0 ? (
          <>
            <span>{currentNum1}</span>
            <span>{currentOperator}</span>
            <span>{currentNum2}</span>
          </>
        ) : null}

        {currentNum1 === "" ? <span>{total}</span> : null}
        {total !== 0 ? <span>{total}</span> : null}
      </h1>
    </>
  );
};
