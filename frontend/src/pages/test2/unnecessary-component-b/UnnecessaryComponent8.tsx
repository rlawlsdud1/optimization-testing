import { expensiveComputation } from "../../../utils/expensiveComputation";
import UnnecessaryComponent9 from "./UnnecessaryComponent9";

const UnnecessaryComponent8 = () => {
  expensiveComputation();
  return (
    <>
      <div className="p-4 bg-blue-200 rounded-md shadow-lg">
        <UnnecessaryComponent9 />
      </div>
    </>
  );
};
export default UnnecessaryComponent8;
