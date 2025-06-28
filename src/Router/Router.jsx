import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import { Component } from "react";
import Home from "../Components/Home";
import HomePage from "../HomePage";
import ABout from "../Components/About/ABout";
import ContactSection from "../Components/Contact/ContactSection";
import Project from "../Components/Projects/Project";


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
    path:'/about',
  Component:ABout
  },
  {
    path:'/contact',
    Component:ContactSection
  },
  {
    path:'/project'
    ,Component: Project
  }
    ]
  },
]);

export  default router ;