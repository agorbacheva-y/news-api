import { useState, useEffect } from "react";
import axios from "axios";

const SeHeadlines = () => {
  const [ seHeadlines, setSeHeadlines ] = useState({});
  const [ seArticles, setSeArticles ] = useState([]);

  const se = "country=se";

  useEffect(() => {
    fetchSeNews();
  },[]);
  //console.log(headlines);

  useEffect(() => {
    fetchSeHeadlines();
  },[seHeadlines]);
  console.log(seArticles);

  // get data from newsapi
  const fetchSeNews = () => {
    let config = {'x-api-key': process.env.REACT_APP_NEWSAPI_KEY};
    axios.get(`https://newsapi.org/v2/top-headlines?${se}&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`, {
      headers: {
        Authorization: config
      },
    })
    .then((response) => {
      setSeHeadlines(response.data);
      //console.log(response.data);
    })
    .catch(error => {
      console.log(error.response.status)
    });
  };

  // save only the articles
  const fetchSeHeadlines = () => {
    const fiveHeadlines = seHeadlines?.articles?.slice(0, 5);
    setSeArticles(fiveHeadlines);
  };

  return (
    <>
      <h1>Top Swedish Headlines</h1>
      <div className="articles__en">
        {seArticles?.map((item, i) => (
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

export default SeHeadlines;