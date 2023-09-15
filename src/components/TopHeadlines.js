import { useState, useEffect } from "react";
import axios from "axios";
import Headline from "./Headline";

const API_ENDPOINT = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`;

const TopHeadlines = () => {
  const [ headlines, setHeadlines ] = useState({});
  const [ articles, setArticles ] = useState([]);
  const [ topFiveArticles, setTopFiveArticles ] = useState([]);

  useEffect(() => {
    fetchNews();
  },[]);
  //console.log(headlines);

  useEffect(() => {
    fetchHeadlines();
  },[headlines]);
  // console.log(articles);

  const fetchNews = () => {
    axios.get(API_ENDPOINT, {
      headers: {
        'Authorization': 'Bearer' + process.env.REACT_APP_NEWSAPI_KEY
      }
    })
    .then((response) => {
      setHeadlines(response.data);
    })
    .catch(error => {
      console.log(error.response.status)
    });
  };

  const fetchHeadlines = () => {
    setArticles(headlines?.articles);
  };

  // useEffect(() => {
  //   const slicedArticles = articles.slice(0, 5);
  //   const result = slicedArticles?.map(a => a.title);
  //   setTopFiveArticles(result);
  // },[articles]);

  // console.log(topFiveArticles);

  return (
    <>
      <h1>Top Headlines</h1>

      {/* <div>
        {topFiveArticles?.map((item, i) =>
        (
          <div key={i}>
            <h3>{item}</h3>
          </div>
        ))}
      </div> */}

      <div>
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
      </div>
    </>
  );
};

export default TopHeadlines;