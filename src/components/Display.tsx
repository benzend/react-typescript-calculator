interface Props {
  currentDisplay: string[];
}

const Display = ({ currentDisplay }: Props) => {
  return (
    <div>
      <h1>{currentDisplay}</h1>
    </div>
  );
};

export default Display;
