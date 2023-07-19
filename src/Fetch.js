import { useState, useEffect } from "react";

const API_ENDPOINT = 'https://listen-api.listennotes.com/api/v2'
const Fetch = () => {
  const [ podcast, setPodcast ] = useState({});

  const fetchPodcast = async () => {
    let response = await fetch(`${API_ENDPOINT}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchPodcast();
  },[]);

  return (
    <>
    </>
  );
};

export default Fetch;