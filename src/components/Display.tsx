import { TotalHistoryLayout } from "../layouts/TotalHistoryLayout";

interface Props {
  currentDisplay: string[];
  totalHistory: string[];
  currentTotal: string;
}

const Display = ({ currentDisplay, totalHistory, currentTotal }: Props) => {
  return (
    <div>
      <h1>{currentDisplay}</h1>
      <h2>{currentTotal}</h2>
      <TotalHistoryLayout>
        <h3>{totalHistory}</h3>
      </TotalHistoryLayout>
    </div>
  );
};

export default Display;
