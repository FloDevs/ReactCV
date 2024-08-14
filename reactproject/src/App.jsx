import {createBrowserRouter, RouterProvider} from "react-router-dom" ;
import './App.css'
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";
import Realisation from "./pages/Realisations";
import Services from "./pages/Services";


const router = createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
  {
    path: '/services',
    element:<Services/>
  },
  {
    path: '/réalisations',
    element:<Realisation/>
  },
  {
    path: '/blog',
    element:<Blog/>
  },
  {
    path: '/contact',
    element:<Contact/>
  },
  {
    path: '/mentions',
    element:<Mentions/>
  }])
  


  

function App() {
  

  return (
    <>
     <RouterProvider router={router}/>
     
    </>
  )
}

export default App
