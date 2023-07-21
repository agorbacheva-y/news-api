import { useState, useEffect } from "react";
import Headline from "./Headline";

const API_ENDPOINT = `https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`;
//const API_ENDPOINT = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=238c3b821383439bab3fee68b1f5e91b";

const TopHeadlines = () => {
  const [ headlines, setHeadlines ] = useState({});
  const [ articles, setArticles ] = useState([]);
  const [ topFiveArticles, setTopFiveArticles ] = useState([]);

  useEffect(() => {
    const fetchHeadline = async () => {
      let response = await fetch(`${API_ENDPOINT}`);
      const data = await response.json();
      console.log(data);
      setHeadlines(data);
    };
  
    fetchHeadline();
  },[]);

  useEffect(() => {
    setArticles(headlines?.articles);
  },[headlines]);

  useEffect(() => {
    setTopFiveArticles(articles?.slice(0, 5));
  },[articles]);

  console.log(topFiveArticles);

  return (
    <>
      <h1>Top Headlines</h1>
      <div>
        <Headline topFiveArticles={topFiveArticles} />
      </div>

    </>
  );
};

export default TopHeadlines;