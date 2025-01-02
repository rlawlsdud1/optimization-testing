import { expensiveComputation } from "../../../utils/expensiveComputation";

const UnnecessaryComponent10 = ({ count }: { count: number }) => {
  expensiveComputation();
  return (
    <>
      <div className="text-xl text-blue-500 font-bold">Count: {count}</div>
    </>
  );
};

export default UnnecessaryComponent10;
