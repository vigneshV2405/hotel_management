import React from 'react';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './components/home/home'
import reportWebVitals from './reportWebVitals'
import Adminlogin from './components/admin/adminLogin';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Admin from './components/admin/admin';
import Admindashboard from './components/admin/admindashboard';
import Addhotel from './components/admin/addhotel';
import Hotel from './components/hotel/hotel';
import Edithotel from './components/admin/edithotel';
import Deletehotel from './components/admin/deletehotel';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/about',
        element:(
          <h1>About us</h1>
        )
      },
      {
        path:'/hotel/:_id',
        element:<Hotel/>
      },
      {
        path:'/admin',
        element:<Admin/>,
        children:[
          {
            path:'/admin/login',
            element:<Adminlogin/>
          },
          {
            path:'/admin/dashboard',
            element:<Admindashboard/>,
            children:[
              {
                path:'/admin/dashboard/addhotel',
                element:<Addhotel/>
              },
              {
                path:'/admin/dashboard/edithotel',
                element:<Edithotel/>
              },
              {
                path:'/admin/dashboard/deletehotel',
                element:<Deletehotel/>
              }
            ]
          }
        ]
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();