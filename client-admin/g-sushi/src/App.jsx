import { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom'

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  // const [page, setPage] = useState("dashboard")

  return (
    <>
      <Outlet/>
      {/* {page === 'login' ? <Login /> : <Dashboard setPage={setPage} page={page}/>}      */}
    </>
  );
}

export default App;
