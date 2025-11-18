

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home";
import Login from "./auth/Login";
import Register from "./auth/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
]);

function App() {
  return (
     <RouterProvider router={router} />
  )
}

export default App
