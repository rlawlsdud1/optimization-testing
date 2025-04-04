import { expensiveComputation } from "../../../utils/expensiveComputation";
import UnnecessaryComponent4 from "./UnnecessaryComponent4";

const UnnecessaryComponent3 = ({ count }: { count: number }) => {
  expensiveComputation();
  return (
    <div className="p-4 bg-blue-200 rounded-md shadow-lg">
      <UnnecessaryComponent4 count={count} />
    </div>
  );
};
export default UnnecessaryComponent3;
