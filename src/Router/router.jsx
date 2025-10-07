import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Error from '../Error/Error';
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Error></Error>,
    children:[
        {
            index:true,
            path:'/',
            Component:Root,
        }
    ]
  },
]);