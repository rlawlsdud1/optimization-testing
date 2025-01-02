import { expensiveComputation } from "../../../utils/expensiveComputation";
import UnnecessaryComponent6 from "./UnnecessaryComponent6";

const UnnecessaryComponent5 = () => {
  expensiveComputation();
  return (
    <>
      <div className="p-4 bg-blue-200 rounded-md shadow-lg">
        <UnnecessaryComponent6 />
      </div>
    </>
  );
};
export default UnnecessaryComponent5;
