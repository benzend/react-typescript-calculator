export const Operator = ({ ops }: any) => {
  return (
    <>
      <h1>Operator</h1>
      {ops.map((op: string) => (
        <div>{op}</div>
      ))}
    </>
  );
};
