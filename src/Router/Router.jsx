import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import { Component } from "react";
import ABout from "../Components/About/ABout";
import ContactSection from "../Components/Contact/ContactSection";
import Project from "../Components/Projects/Project";
import Home from "../Home";
import HomePage from "../Components/Home Page/HomePage";
import FunFact from "../Components/Fun Fact/FunFact";
import Blogs from "../Components/Blogs/Blogs";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "/",
        Component: HomePage
      },
      {
        path: '/about',
        Component: ABout
      },
      {
        path: '/contact',
        Component: ContactSection
      },
      {
        path: '/project'
        , Component: Project
      },
      {
        path: '/fun-fact',
        Component: FunFact
      },
      {
        path: '/blog',
        Component: Blogs
      }
    ]
  },
]);

export default router;