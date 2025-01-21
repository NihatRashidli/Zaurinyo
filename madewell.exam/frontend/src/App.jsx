import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LAyout from "./components/layout/LAyout";
import Home from "./pages/home/Home";
import Collection from "./pages/Collection";
import Shop from "./pages/Shop";
import Catalogs from "./pages/Catalogs";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import Basket from "./pages/basket/Basket";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LAyout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/collection",
          element: <Collection />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/catalogs",
          element: <Catalogs />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },{
          path: "/basket",
          element: <Basket />,
        },
      ],
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
