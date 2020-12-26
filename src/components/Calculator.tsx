import numeral from "numeral";
import Operation from "./Operation";

const Calculator = () => {
  const operations = [
    "CLR",
    "=",
    "+",
    "-",
    "/",
    "*",
    "^",
    ".",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  return (
    <div>
      <h1>this is a calculator</h1>
      {operations.map((operation) => (
        <Operation operation={operation} />
      ))}
    </div>
  );
};

export default Calculator;
