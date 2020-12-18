interface Props {
  equalsHandler: any;
}

export const Equals = ({ equalsHandler }: Props) => {
  return (
    <div onClick={equalsHandler}>
      <h1>=</h1>
    </div>
  );
};
