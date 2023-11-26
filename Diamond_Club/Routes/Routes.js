import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Guard from "../Components/Guard";
import HomePage from "../Components/HomePage";
import Login from "../Components/Login";
import MainPage from "../Components/Home";

function Routes() {
  const router = createBrowserRouter([
    // ROOT ROUTE
    {
      path: "/",
      element: <HomePage />,
    },

    // GUARD ROUTE THAT WILL RENDER LOGIN PAGE OR MAIN PAGE 
    {
      path: "/app",
      element: <Guard />,
      children: [
        {
          path: "",
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <MainPage />,
            },
          ],
        },
      ],
    },
    // LOGIN PAGE ROUTE
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
