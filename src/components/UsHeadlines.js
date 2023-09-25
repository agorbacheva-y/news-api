import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UsHeadlines = () => {
  const [ usHeadlines, setUsHeadlines ] = useState({});
  const [ usArticles, setUsArticles ] = useState([]);

  const navigate = useNavigate();

  const us = "language=en&country=us";

  useEffect(() => {
    fetchUsNews();
  },[]);
  //console.log(usHeadlines);

  useEffect(() => {
    fetchUsHeadlines();
  },[usHeadlines]);
  //console.log(usArticles);

  // get data from newsapi
  const fetchUsNews = () => {
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
  const fetchUsHeadlines = () => {
    const topHeadlines = usHeadlines?.articles?.slice(0, 10);
    setUsArticles(topHeadlines);
  };

  const handleClick = () => {
    navigate("/article", { state: usArticles });
  }

  return (
    <>
      <h1>Top US Headlines</h1>
      <div className="articles__en">
        {usArticles?.map((item, i) => (
          <div key={i} className="article" onClick={handleClick} >
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