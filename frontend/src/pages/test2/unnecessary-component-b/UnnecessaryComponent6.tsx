import { expensiveComputation } from "../../../utils/expensiveComputation";
import UnnecessaryComponent7 from "./UnnecessaryComponent7";

const UnnecessaryComponent6 = () => {
  expensiveComputation();
  return (
    <>
      <div className="p-4 bg-blue-200 rounded-md shadow-lg">
        <UnnecessaryComponent7 />
      </div>
    </>
  );
};
export default UnnecessaryComponent6;
