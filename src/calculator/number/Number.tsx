export const Number = ({ nums }: any) => {
  return (
    <>
      {nums.map((num: number) => (
        <div>{num}</div>
      ))}
    </>
  );
};
