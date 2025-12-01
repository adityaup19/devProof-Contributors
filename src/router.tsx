import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SandboxLoader from "./SandboxLoader";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tasks/:taskId",
    element: <SandboxLoader />,
  },
]);
