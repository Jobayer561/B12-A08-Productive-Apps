import { createBrowserRouter } from "react-router"
import RootLayouts from "../Layout/RootLayouts"
import Error from "../Pages/Error";
import AppsDetails from "../Pages/AppsDetails";
import Loading from "../Components/Loading";
import InstallPage from "../Pages/InstallPage";
import AppsPage from "../Pages/AppsPage";
import HomePage from "../Pages/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    hydrateFallbackElement: <Loading/>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/apps",
        element: <AppsPage />,
      },
      {
        path: "/installation",
        element: <InstallPage />,
      },
      {
        path: "/app/:id",
        element: <AppsDetails />,
      },
    ],
  },
]);
export default router