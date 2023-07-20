import { useState, useEffect } from "react";

const API_ENDPOINT = `https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`;
//const API_ENDPOINT = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=238c3b821383439bab3fee68b1f5e91b";

const TopHeadlines = () => {
  const [ headlines, setHeadlines ] = useState({});
  const [ articles, setArticles ] = useState([]);
  const [ topFiveArticles, setTopFiveArticles ] = useState([]);
  const [ topFiveTitles, setTopFiveTitles ] = useState([]);
  const [ index, setIndex ] = useState(0);

  const fetchHeadline = async () => {
    let response = await fetch(`${API_ENDPOINT}`);
    const data = await response.json();
    console.log(data);
    setHeadlines(data);
  };

  useEffect(() => {
    fetchHeadline();
  },[]);

  useEffect(() => {
    const article = headlines.articles;
    setArticles(article);
  },[headlines]);

  useEffect(() => {
    const topArticles = articles?.slice(0, 5);
    setTopFiveArticles(topArticles);
  },[articles]);

  console.log(topFiveArticles);

  useEffect(() => {
    const titles = topFiveArticles?.forEach((object) =>
      object = object.title
    );
    setTopFiveTitles(titles);
  },[topFiveArticles, index]);

  console.log(topFiveTitles);
  // trying to save only titles of top 5 headlines...

  return (
    <>
      <h1>Top Headlines</h1>
      {/* <div>
        {topFive[index].title.map((item, index) => {
          return (
            <p key={index}>{item}</p>
          );            
        })}
      </div> */}
    </>
  );
};

export default TopHeadlines;