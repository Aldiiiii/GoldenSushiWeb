import { useEffect, useState } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState("dashboard")
  const  [items, setItems] = useState([])

  async function fetchItems(){
    try {
      let response = await fetch("http://localhost:3000/items")

      if(!response.ok) {
        throw {name: "Error while fetching items"}
      }
      response = await response.json()
      setItems(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <>
      {page === 'login' ? <Login /> : <Dashboard setPage={setPage} page={page} items={items} />}     
    </>
  );
}

export default App;
