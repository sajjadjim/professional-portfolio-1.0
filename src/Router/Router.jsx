import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomePage from "../HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
    children :[
        {
            
        }
    ]
  },
]);

export  default router ;