import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Test1 from "./pages/test1/Test1";
import Test2 from "./pages/test2/Test2";
import Test3 from "./pages/test3/Test3";
import Test1A from "./pages/test1/Test1A";
import Test1B from "./pages/test1/Test1B";
import Test1Summation from "./pages/test1/Test1Summation";
import Test2Summation from "./pages/test2/Test2Summation";
import Test2A from "./pages/test2/Test2A";
import Test2B from "./pages/test2/Test2B";

// Lazy Loaded Components
// const Test2A = lazy(() => import("./pages/test2/Test2A"));
// const Test2B = lazy(() => import("./pages/test2/Test2B"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/test1" element={<Test1 />}>
            <Route path="a" element={<Test1A />} />
            <Route path="b" element={<Test1B />} />
            <Route path="summation" element={<Test1Summation />} />
          </Route>
          <Route path="/test2" element={<Test2 />}>
            <Route path="a" element={<Test2A />} />
            <Route path="b" element={<Test2B />} />
            <Route path="summation" element={<Test2Summation />} />
          </Route>
          <Route path="/test3" element={<Test3 />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
