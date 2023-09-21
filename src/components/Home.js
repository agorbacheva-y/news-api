import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="headline--link">    
      <Link to="/usheadlines">Top US Headlines</Link>
      <Link to="/jpheadlines">Top Japan Headlines</Link>
    </div>
  );
};

export default Home;

// useContext to pass props to usheadlines.js and jpheadlines.js