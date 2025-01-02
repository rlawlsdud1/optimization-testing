import { useState } from "react";
import UnnecessaryComponent1 from "./unnecessary-component-a/UnnecessaryComponent1";

const Test2A = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">
        Using Props-drilling
      </h1>

      <div className="flex justify-center">
        <div className="text-center p-8 bg-white rounded-xl shadow-xl max-w-lg w-full">
          <button
            onClick={handleClick}
            className="bg-blue-500 text-white py-4 px-4 rounded-full shadow-md hover:bg-blue-600 transition duration-300 mb-4"
          >
            Increment
          </button>
          <UnnecessaryComponent1 count={count} />
        </div>
      </div>
    </>
  );
};

export default Test2A;
