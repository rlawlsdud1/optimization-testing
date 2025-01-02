import { expensiveComputation } from "../../../utils/expensiveComputation";
import UnnecessaryComponent8 from "./UnnecessaryComponent8";

const UnnecessaryComponent7 = () => {
  expensiveComputation();
  return (
    <>
      <div className="p-4 bg-blue-200 rounded-md shadow-lg">
        <UnnecessaryComponent8 />
      </div>
    </>
  );
};
export default UnnecessaryComponent7;
