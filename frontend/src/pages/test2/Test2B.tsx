import useCountStore from "../../stores/count.store";
import UnnecessaryComponent1 from "./unnecessary-component-b/UnnecessaryComponent1";

const Test2B = () => {
  const increment = useCountStore((state) => state.increment);
  // const { increment } = useCountStore();

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">Using Zustand</h1>

      <div className="flex justify-center">
        <div className="text-center p-8 bg-white rounded-xl shadow-xl max-w-lg w-full">
          <button
            className="bg-blue-500 text-white py-4 px-4 rounded-full shadow-md hover:bg-blue-600 transition duration-300 mb-4"
            onClick={increment}
          >
            Increment
          </button>
          <UnnecessaryComponent1 />
        </div>
      </div>
    </>
  );
};

export default Test2B;
