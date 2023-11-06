import { Outlet } from "react-router-dom"
import React from 'react';
import { ToastContainer } from 'react-toastify';
import NavScrollExample from "./components/Navbar"

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <NavScrollExample />
      <Outlet />
      <ToastContainer />
    </>
  )
}

export default App
