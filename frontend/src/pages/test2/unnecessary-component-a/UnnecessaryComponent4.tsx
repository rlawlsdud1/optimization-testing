import { expensiveComputation } from "../../../utils/expensiveComputation";
import UnnecessaryComponent5 from "./UnnecessaryComponent5";

const UnnecessaryComponent4 = ({ count }: { count: number }) => {
  expensiveComputation();
  return (
    <>
      <div className="p-4 bg-blue-200 rounded-md shadow-lg">
        <UnnecessaryComponent5 count={count} />
      </div>
    </>
  );
};
export default UnnecessaryComponent4;
