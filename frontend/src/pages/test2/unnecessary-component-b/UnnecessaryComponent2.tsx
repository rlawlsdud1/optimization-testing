import { expensiveComputation } from "../../../utils/expensiveComputation";
import UnnecessaryComponent3 from "./UnnecessaryComponent3";

const UnnecessaryComponent2 = () => {
  expensiveComputation();
  return (
    <>
      <div className="p-4 bg-blue-200 rounded-md shadow-lg">
        <UnnecessaryComponent3 />
      </div>
    </>
  );
};
export default UnnecessaryComponent2;