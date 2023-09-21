import {useContext} from "react";
import { CounterContext } from "./Fetch";

const UsHeadlines = () => {
  const { usArticles } = useContext(CounterContext);

  console.log(usArticles);
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