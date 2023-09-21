import { useState, useEffect, createContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const CounterContext = createContext("");

const Fetch = () => {
  const [ usHeadlines, setUsHeadlines ] = useState({});
  const [ usArticles, setUsArticles ] = useState([]);

  const [ jpHeadlines, setJpHeadlines ] = useState({});
  const [ jpArticles, setJpArticles ] = useState([]);

  const us = "language=en&country=us";
  const jp = "language=jp&country=jp";

  useEffect(() => {
    fetchUsNews();
    fetchJpNews();
  },[]);
  //console.log(headlines);

  useEffect(() => {
    fetchUsHeadlines();
    fetchJpHeadlines();
  },[usHeadlines, jpHeadlines]);
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
  const fetchUsHeadlines = () => {
    const fiveHeadlines = usHeadlines?.articles?.slice(0, 5);
    setUsArticles(fiveHeadlines);
  };

  const fetchJpHeadlines = () => {
    const fiveHeadlines = jpHeadlines?.articles?.slice(0, 5);
    setJpArticles(fiveHeadlines);
  };

  return (
    <CounterContext.Provider value={{ usArticles, jpArticles }}>    
      <Link to="/usheadlines">US Headlines</Link>
      <Link to="/jpheadlines">Japan Headlines</Link>
    </CounterContext.Provider>
  );
};

export default Fetch;

// useContext to pass props to usheadlines.js and jpheadlines.js