import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import { Component } from "react";
import Home from "../Components/Home";
import HomePage from "../HomePage";


const router = createBrowserRouter([
  {
    path: "/",
Component: Home,
children: [
  {
    path: "/",
    Component: HomePage
  }
    ]
  },
]);

export  default router ;