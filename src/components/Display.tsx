interface Props {
  currentDisplay: string[];
  totalHistory: string[];
}

const Display = ({ currentDisplay, totalHistory }: Props) => {
  return (
    <div>
      <h1>{currentDisplay}</h1>
      <h2>{totalHistory}</h2>
    </div>
  );
};

export default Display;
