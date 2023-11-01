import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});

  async function fetchData() {
    try {
      let response = await fetch("http://localhost:3000/" + url);
      if (!response.ok) {
        throw { name: "Error while fetching data" };
      }
      response = await response.json();
      setData(response);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    error,
  };
}
