import React from "react";
import { expensiveComputation } from "../../../utils/expensiveComputation";
import UnnecessaryComponent2 from "./UnnecessaryComponent2";

const UnnecessaryComponent1 = React.memo(() => {
  expensiveComputation();
  return (
    <>
      <div className="p-4 bg-blue-200 rounded-md shadow-lg">
        <UnnecessaryComponent2 />
      </div>
    </>
  );
});
export default UnnecessaryComponent1;
