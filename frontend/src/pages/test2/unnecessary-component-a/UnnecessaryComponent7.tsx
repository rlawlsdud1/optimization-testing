import { expensiveComputation } from "../../../utils/expensiveComputation";
import UnnecessaryComponent8 from "./UnnecessaryComponent8";

const UnnecessaryComponent7 = ({ count }: { count: number }) => {
  expensiveComputation();
  return (
    <>
      <div className="p-4 bg-blue-200 rounded-md shadow-lg">
        <UnnecessaryComponent8 count={count} />
      </div>
    </>
  );
};
export default UnnecessaryComponent7;
