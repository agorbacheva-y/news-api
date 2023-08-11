import { useState, useEffect } from "react";
import Headline from "./Headline";

const API_ENDPOINT = `https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`;

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
    const slicedArticles = articles.slice(0, 5);
    const result = slicedArticles?.map(a => a.title);
    setTopFiveArticles(result);
  },[articles]);

  console.log(topFiveArticles);

  return (
    <>
      <h1>Top Headlines</h1>

      <div>
        {topFiveArticles?.map((item, i) =>
        (
          <div key={i}>
            <h3>{item}</h3>
          </div>
        ))}
      </div>

      {/* <div>
        <h3>{articles[0].title}</h3>
        <p>{articles[0].source.name}</p>
      </div>

      <div>
        <h3>{articles[1].title}</h3>
        <p>{articles[1].source.name}</p>
      </div>
      
      <div>
        <h3>{articles[2].title}</h3>
        <p>{articles[2].source.name}</p>
      </div> */}
    </>
  );
};

export default TopHeadlines;