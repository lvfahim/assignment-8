import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Error from '../Error/Error';
import Home from '../Page/Home';
import Apps from '../Page/Apps';
import Installation from '../Page/Installation';
import AppDetails from '../Page/AppDetails';
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Error></Error>,
    children:[
        {
            index:true,
            loader:()=>fetch('/apps.json'),
            path:'/',
            Component:Home,
        },
        {
            path:'/apps',
            loader:()=>fetch('/extaApps.json'),
            Component:Apps
        },
        {
            path:'/installation',
            Component:Installation
        },
        {
          path:'/apps/:Id',
          loader:()=>fetch('/extaApps.json'),
          Component:AppDetails
        }
    ]
  },
]);