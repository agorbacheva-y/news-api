import { useState, useEffect } from "react";
import axios from "axios";
import Headline from "./Headline";

const API_ENDPOINT = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`;

const TopHeadlines = () => {
  const [ headlines, setHeadlines ] = useState({});
  const [ articles, setArticles ] = useState([]);

  useEffect(() => {
    fetchNews();
  },[]);
  //console.log(headlines);

  useEffect(() => {
    fetchHeadlines();
  },[headlines]);
  console.log(articles);

  // get data from newsapi
  const fetchNews = () => {
    let config = {'x-api-key': process.env.REACT_APP_NEWSAPI_KEY};
    axios.get(API_ENDPOINT, {
      headers: {
        Authorization: config
      },
    })
    .then((response) => {
      setHeadlines(response.data);
      //console.log(response.data);
    })
    .catch(error => {
      console.log(error.response.status)
    });
  };

  // save only the articles
  const fetchHeadlines = () => {
    const fiveHeadlines = headlines?.articles?.slice(0, 5);
    setArticles(fiveHeadlines);
  };

  return (
    <>
      <h1>Top Headlines</h1>

      <div>
        {articles?.map((item, i) => (
          <div key={i}>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

    </>
  );
};

export default TopHeadlines;