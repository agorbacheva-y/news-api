import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SeHeadlines = () => {
  const [ seHeadlines, setSeHeadlines ] = useState({});
  const [ seArticles, setSeArticles ] = useState([]);

  const navigate = useNavigate();

  const se = "country=se";

  useEffect(() => {
    fetchSeNews();
  },[]);
  //console.log(seHeadlines);

  useEffect(() => {
    fetchSeHeadlines();
  },[seHeadlines]);
  //console.log(seArticles);

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
    const topHeadlines = seHeadlines?.articles?.slice(0, 10);
    setSeArticles(topHeadlines);
  };

  const handleClick = (i) => {
    navigate("/article", { state: seArticles });
  }

  return (
    <>
      <h1>Top Swedish Headlines</h1>
      <div className="articles__en">
        {seArticles?.map((item, i) => (
          <div key={i} className="article" onClick={handleClick}>
            <div className="article--text" onClick={() => localStorage.setItem("article index", i)}>
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