import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import ErrorPage from './Components/ErrorPage.jsx';
import AboutPage from './Components/AboutPage.jsx';
import Skill from './Components/SkillPage.jsx';
import Project from './Components/ProjetPage.jsx';
import Experience from './Components/ExperiencePage.jsx';

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
    path: "/About",
    element: <AboutPage/>,
  },
  {
    path: "/Skill",
    element: <Skill/>,
  },
  {
    path: "/Project",
    element: <Project/>,
  },
  {
    path: "/Experience",
    element: <Experience/>,
  },
  {
    path: "*",
    element: <ErrorPage/>,
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


