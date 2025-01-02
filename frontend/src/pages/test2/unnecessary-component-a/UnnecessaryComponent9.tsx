import { expensiveComputation } from "../../../utils/expensiveComputation";
import UnnecessaryComponent10 from "./UnnecessaryComponent10";

const UnnecessaryComponent9 = ({ count }: { count: number }) => {
  expensiveComputation();
  return (
    <>
      <div className="p-4 bg-blue-200 rounded-md shadow-lg">
        <UnnecessaryComponent10 count={count} />
      </div>
    </>
  );
};
export default UnnecessaryComponent9;
