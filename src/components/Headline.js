import { useState } from "react";

const Headline = ({ topFiveArticles }) => {
  const [ index, setIndex ] = useState(0);

  return (
    <>
      <div>
        <h3>
          {topFiveArticles[0]?.title}
        </h3>
        <p>
          {topFiveArticles[0]?.source?.name}
        </p>
      </div>

      {/* <div>
        {topFiveArticles?.title?.map((item, i) =>
        (
          <div key={i}>
            {item}
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Headline;