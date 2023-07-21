import { useState, useEffect } from "react";

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
    setArticles(headlines.articles);
  },[headlines]);

  useEffect(() => {
    setTopFiveArticles(articles?.slice(0, 5));
  },[articles]);

  console.log(topFiveArticles);

  return (
    <>
      <h1>Top Headlines</h1>
      <div>
        <h3>
          {topFiveArticles[0]?.title}
        </h3>
        <p>
          {topFiveArticles[0]?.source?.name}
        </p>
      </div>

    </>
  );
};

export default TopHeadlines;

// same issue where undefined until i hide and unhide return statement...