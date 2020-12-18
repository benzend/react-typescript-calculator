import { Display } from "./display/Display";
import { Operator } from "./operator/Operator";
import { Number } from "./number/Number";

// We're going to store all state and data in here
export const Calculator = () => {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const ops = ["+", "-", "%", "*"];
  return (
    <>
      <Display />
      {nums.map((num: any) => (
        <Number num={num} />
      ))}
      {ops.map((op: string) => (
        <Operator op={op} />
      ))}
    </>
  );
};
