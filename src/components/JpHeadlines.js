const JpHeadlines = ({ jpArticles }) => {

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