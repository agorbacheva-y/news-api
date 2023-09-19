import { useState, useEffect } from "react";
import axios from "axios";

const API_ENDPOINT = `https://newsapi.org/v2/top-headlines?language=en&country=us&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`;

const UsHeadlines = () => {
  const [ usHeadlines, setUsHeadlines ] = useState({});
  const [ usArticles, setUsArticles ] = useState([]);

  const us = "language=en&country=us";

  useEffect(() => {
    fetchNews();
  },[]);
  //console.log(headlines);

  useEffect(() => {
    fetchHeadlines();
  },[usHeadlines]);
  console.log(usArticles);

  // get data from newsapi
  const fetchNews = () => {
    let config = {'x-api-key': process.env.REACT_APP_NEWSAPI_KEY};
    axios.get(`https://newsapi.org/v2/top-headlines?${us}&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`, {
      headers: {
        Authorization: config
      },
    })
    .then((response) => {
      setUsHeadlines(response.data);
      //console.log(response.data);
    })
    .catch(error => {
      console.log(error.response.status)
    });
  };

  // save only the articles
  const fetchHeadlines = () => {
    const fiveHeadlines = usHeadlines?.articles?.slice(0, 5);
    setUsArticles(fiveHeadlines);
  };

  return (
    <>
      <h1>Top US Headlines</h1>
      <div className="articles__en">
        {usArticles?.map((item, i) => (
          <div key={i} className="article">
            <img src={item.urlToImage} alt="article photo" />
            <div className="article--text">
              <h3>{item.title}</h3>
              <p>published on {item.publishedAt}</p>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default UsHeadlines;