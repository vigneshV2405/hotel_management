import React from 'react';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './components/home/home'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux';
import { store } from './store/store';
import Admin from './components/admin/admin';
import Admindashboard from './components/admin/admindashboard';
import Addhotel from './components/admin/addhotel';
import Hotel from './components/hotel/hotel';
import Edithotel from './components/admin/edithotel';
import Deletehotel from './components/admin/delete/deletehotel';
import Aboutus from './components/aboutus';
import Adminwelcome from './components/admin/adminwelcome';
import Search from './components/features/search/search';

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
          <Aboutus/>
        )
      },
      {
        path:'/hotel/:_id',
        element:<Hotel/>
      },
      {
        path:'/search',
        element:<Search/>
      },
      {
        path:'/admin',
        element:<Admin/>,
        children:[
          {
            path:'/admin/dashboard',
            element:<Admindashboard/>,
            children:[
              {
                path:'/admin/dashboard/',
                element:<Adminwelcome/>
              },
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