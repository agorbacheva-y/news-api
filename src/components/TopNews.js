import { useState, useEffect } from 'react'

const API_ENDPOINT = `https://newsapi.org/v2/top-headlines/sources?country=usapiKey=${process.env.REACT_APP_NEWSAPI_KEY}`;

function TopNews() {
  const [ news, setNews ] = useState([]);

  // fetch newsAPI
  useEffect(() => {
    fetchNews();
  },[]);

  const fetchNews = async () => {
    try {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      setNews(data.results);
    } catch (error) {
      console.log(error.message);
    }

    console.log(news);
  };

  return (
    <div>
      <p>top news</p>
    </div>
  );
};

export default TopNews;
