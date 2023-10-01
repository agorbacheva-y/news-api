import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const JpHeadlines = () => {
  const [ jpHeadlines, setJpHeadlines ] = useState({});
  const [ jpArticles, setJpArticles ] = useState([]);

  const navigate = useNavigate();

  const jp = "language=jp&country=jp";

  useEffect(() => {
    fetchJpNews();
  },[]);
  //console.log(jpHeadlines);

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
    const topHeadlines = jpHeadlines?.articles?.slice(0, 10);
    setJpArticles(topHeadlines);
  };

  const handleClick = (i) => {
    navigate("/article", { state: jpArticles });
  }

  return (
    <>
      <h1>Top Japan Headlines</h1>
      <div className="articles__en" onClick={handleClick}>
        {jpArticles?.map((item, i) => (
          <div key={i} className="article" onClick={() => localStorage.setItem("article index", i)}>
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