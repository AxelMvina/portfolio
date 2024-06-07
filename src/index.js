import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import Home from './Home';
import ErrorPage from './Components/ErrorPage.jsx';
import { ParallaxProvider } from "react-scroll-parallax";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "*",
    element: <ErrorPage/>,
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParallaxProvider>
    <RouterProvider router={router} />
    </ParallaxProvider>
  </React.StrictMode>
);


