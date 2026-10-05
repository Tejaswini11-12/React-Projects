import { useState } from 'react'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Content from './components/Content'
import './App.css'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <Home/>
    },
    {
      path:'/content/:id',
      element: <Content/>
    },
  ]
);
function App() {
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
