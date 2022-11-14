import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routs } from "./Routs/Routs";

function App() {
  return (
    <div className="max-w-[1440px]">
      <RouterProvider router={routs}></RouterProvider>
    </div>
  );
}

export default App;
