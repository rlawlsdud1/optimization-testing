import { Outlet, useNavigate } from "react-router-dom";

const Test2 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">TEST2 Page</h1>
      <div className="space-x-4">
        <button
          onClick={() => navigate("a")}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Go to Test2 A
        </button>
        <button
          onClick={() => navigate("b")}
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          Go to Test2 B
        </button>
        <button
          onClick={() => navigate("summation")}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Go to Test2 Summation
        </button>
      </div>
      <div className="mt-8 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Test2;
