import { useState } from 'react'
import './App.css'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/content/:id",
    element: <Posts/>
  }
])

function App() {
  return (
    <><RouterProvider router={router}/></>
  )
}

export default App
