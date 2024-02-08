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
import Login from './pages/Login'
// import Signup from './pages/Signup'

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
      {
        path: '/login',
        element: <Login />,
      },
      // {
      //   path: '/signup',
      //   element: <Signup />,
      // },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} /> 
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
);
