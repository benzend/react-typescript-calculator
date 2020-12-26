interface Props {
  operation: string;
}

const Operation = ({ operation }: Props) => {
  return (
    <div>
      <div className="button">{operation}</div>
    </div>
  );
};

export default Operation;
