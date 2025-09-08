import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Allstudents from './components/Allstudents'
import AddStudent from './components/AddStudent'

const routes=createBrowserRouter([
  {
    path:"",
    element:<Layout/>,
    children:[
       {
        index:true,
        element:<Home/>
       },
       {
        path:"students",
        element:<Allstudents/>
       },
       {
        path:'add-student',
        element:<AddStudent/>
       }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
