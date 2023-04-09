import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import MainWrapper from "./components/MainWrapper";
import Publisher from "./pages/Publisher";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "details",
    element: <Detail />,
  },
  {
    path: "publisher",
    element: <Publisher />,
  },
]);
function App() {
  return (
    <MainWrapper>
      <RouterProvider router={router} />
    </MainWrapper>
  );
}

export default App;
