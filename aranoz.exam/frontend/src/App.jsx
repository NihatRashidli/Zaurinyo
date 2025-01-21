import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Shop from "./pages/Shop";
import Pages from "./pages/Pages";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Wishlist from "./pages/wishlist/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/pages",
        element: <Pages />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
