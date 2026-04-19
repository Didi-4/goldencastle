import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// REACT ROUTER CALL
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// APP PAGES CALL
import Home from './Pages/Home.jsx'
import AboutUs from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx'
import Gallery from './Pages/Gallery.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'

// APP CALL
import App from './App.jsx'


// CREATE A ROUTER FOR REACT PAGES
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
   {
    path: "/Gallery",
    element: <Gallery/>
  },
  {
    path: "Contact",
    element: <Contact/>
  },
  {
    path: "*",
    element: <PageNotFound/>
  }
]);


// APP ROOT
createRoot(document.getElementById('root')).render(

  

  <StrictMode>
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
  </StrictMode>,
)
