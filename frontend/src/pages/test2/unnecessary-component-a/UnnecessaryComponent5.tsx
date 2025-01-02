import { expensiveComputation } from "../../../utils/expensiveComputation";
import UnnecessaryComponent6 from "./UnnecessaryComponent6";

const UnnecessaryComponent5 = ({ count }: { count: number }) => {
  expensiveComputation();
  return (
    <>
      <div className="p-4 bg-blue-200 rounded-md shadow-lg">
        <UnnecessaryComponent6 count={count} />
      </div>
    </>
  );
};
export default UnnecessaryComponent5;
