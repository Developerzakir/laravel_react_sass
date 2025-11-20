import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import BrowseWords from "./words/BrowseWords";
import Plans from "./plans/Plans";
import UserProfile from "./profile/UserProfile";
import PageNotFound from "./404/PageNotFound";

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
    {
      path: "/browse/words",
      element: <BrowseWords />,
    },
    {
      path: "/plans",
      element: <Plans />,
    },
    {
      path: "/profile",
      element: <UserProfile />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
]);

function App() {
  return (
     <RouterProvider router={router} />
  )
}

export default App
