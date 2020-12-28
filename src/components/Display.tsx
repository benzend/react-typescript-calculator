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
      <h3>{totalHistory}</h3>
    </div>
  );
};

export default Display;
