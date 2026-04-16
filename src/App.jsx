import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Sponsor from './pages/Sponsor'
import Thanks from './pages/Thanks'
import Layout from './Layout'

function App() {

  const browserRouter = createBrowserRouter([{
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/omos",
        element: <AboutUs/>
      },
      {
        path: "/sponsering",
        element: <Sponsor/>
      },
      {
        path: "/takker",
        element: <Thanks/>
      }
    ]
  }])

  return (
    <RouterProvider router={browserRouter}/>
  )
}

export default App
