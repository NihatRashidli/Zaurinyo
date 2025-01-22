
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/layout'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Shop from './pages/Shop'
import Latest from './pages/Latest'
import Notfound from './pages/Notfound'
import Basket from './pages/basket/Basket'
import Admin from './pages/Admin'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/latest',
          element: <Latest />,
        }
        , {
          path: '/shop',
          element: <Shop />,
        }, {
          path: '/blog',
          element: <Blog />,
        }, {
          path: '/basket',
          element: <Basket />,
        },
        {
          path: '/admin',
          element: <Admin />,
        }
      ]
    }, {
      path: 'notfound',
      element: <Notfound />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
