import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./pages/Layout";
import Shop from "./pages/Shop";
import Promotion from "./pages/Promotion";
import Pages from "./pages/Pages";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Basket from "./pages/basket/Basket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/promotion", element: <Promotion /> },
      { path: "/pages", element: <Pages /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blog", element: <Blog /> },
      { path: "/basket", element: <Basket /> },
    ],
  },
]);

function App() {
  return <>
  <RouterProvider router={router}/>
  </>;
}

export default App;
