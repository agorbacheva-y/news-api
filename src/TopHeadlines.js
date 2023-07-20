import { useState, useEffect } from "react";

const API_ENDPOINT = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`;
//const API_ENDPOINT = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=238c3b821383439bab3fee68b1f5e91b";

const TopHeadlines = () => {
  const [ headline, setHeadline ] = useState({});

  const fetchHeadline = async () => {
    let response = await fetch(`${API_ENDPOINT}`);
    const data = await response.json();
    console.log(data);
    setHeadline(data);
  };

  useEffect(() => {
    fetchHeadline();
  },[]);

  return (
    <>
      <h1>Top Headlines</h1>
    </>
  );
};

export default TopHeadlines;