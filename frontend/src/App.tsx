import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Test1 from "./pages/test1/Test1";
import Test2 from "./pages/test2/Test2";
import Test3 from "./pages/test3/Test3";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/test1" element={<Test1 />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
