import { useState, useEffect } from "react";
import axios from "axios";


const JpHeadlines = () => {
  const [ jpHeadlines, setJpHeadlines ] = useState({});
  const [ jpArticles, setJpArticles ] = useState([]);

  const jp = "language=jp&country=jp";

  useEffect(() => {
    fetchJpNews();
  },[]);
  //console.log(headlines);

  useEffect(() => {
    fetchJpHeadlines();
  },[jpHeadlines]);
  //console.log(jpArticles);

  // get data from newsapi
  const fetchJpNews = () => {
    let config = {'x-api-key': process.env.REACT_APP_NEWSAPI_KEY};
    axios.get(`https://newsapi.org/v2/top-headlines?${jp}&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`, {
      headers: {
        Authorization: config
      },
    })
    .then((response) => {
      setJpHeadlines(response.data);
      //console.log(response.data);
    })
    .catch(error => {
      console.log(error.response.status)
    });
  };

  // save only the articles
  const fetchJpHeadlines = () => {
    const fiveHeadlines = jpHeadlines?.articles?.slice(0, 5);
    setJpArticles(fiveHeadlines);
  };

  return (
    <>
      <h1>Top Japan Headlines</h1>
      <div className="articles__en">
        {jpArticles?.map((item, i) => (
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

export default JpHeadlines;