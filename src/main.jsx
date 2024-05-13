import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

import Layout from './Layout.jsx'
import ComponetRoot from './components/ComponetRoot.jsx'

const {
  Login,
  Register,
  Home,
  CheckOut,
  NotFound,
} = ComponetRoot;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='login/' element={<Login />} />
      <Route path='register/' element={<Register />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
