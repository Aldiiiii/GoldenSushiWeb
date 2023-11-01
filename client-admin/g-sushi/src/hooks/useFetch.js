import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});

  const dataItems = useSelector((state) => state.items)
  const dispatch = useDispatch()

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
