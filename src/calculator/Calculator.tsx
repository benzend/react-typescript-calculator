import { Display } from "./display/Display";
import { Operator } from "./operator/Operator";
import { Number } from "./number/Number";

export const Calculator = () => {
  return (
    <>
      <Display />
      <Number nums={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
      <Operator ops={["+", "-", "%", "*"]} />
    </>
  );
};
