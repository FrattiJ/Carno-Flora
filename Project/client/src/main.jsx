// import React from 'react'
import  ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import ErrorPage from './pages/Error'
import Shop from './pages/Shop'
import About from './pages/About'
import Cart from './pages/Cart'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} /> 
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
);
