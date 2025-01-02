import useCountStore from "../../../stores/count.store";
import { expensiveComputation } from "../../../utils/expensiveComputation";

const UnnecessaryComponent10 = () => {
  expensiveComputation();
  const count = useCountStore((state) => state.count);
  return (
    <>
      <div className="text-xl text-blue-500 font-bold">Count: {count}</div>
    </>
  );
};
export default UnnecessaryComponent10;
