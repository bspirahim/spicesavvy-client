import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main.jsx';
import Home from './pages/Home/Home/Home.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import ViewRecipe from './pages/ViewRecipe/ViewRecipe.jsx';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute.jsx';
import Category from './pages/Home/Category.jsx';

const router = createBrowserRouter([


  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:() => fetch('http://localhost:5000/category')
        
      },
      {
        path:'/category/:id',
        element:<Category></Category>,
        loader:({params}) => fetch(`http://localhost:5000/category-food/${params.id}`)
      },
      
      {
        path: '/blog',
        element: <Blog></Blog>
      },

      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/chef/:id',
        element:<PrivateRoute>
          <ViewRecipe></ViewRecipe>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
      },
     
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
