import { createBrowserRouter } from "react-router"
import RootLayouts from "../Layout/RootLayouts"
import Home from "../Pages/Home"
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import Error from "../Pages/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    hydrateFallbackElement: <p>Loading...</p>,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installation",
        element:<Installation/>
      },
    ],
  },
]);
export default router