import { Outlet } from 'react-router-dom'
import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Outlet/>
      <ToastContainer />
    </>
  );
}

export default App;
