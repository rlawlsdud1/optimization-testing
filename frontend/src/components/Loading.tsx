const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      <p className="text-gray-600 text-lg mt-4">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
