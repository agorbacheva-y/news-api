import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="headline--link">    
      <Link to="/usheadlines" style={{textDecoration: 'none', color: 'black'}}>
        <h3>Top US Headlines</h3>
      </Link>
      <Link to="/jpheadlines" style={{textDecoration: 'none', color: 'black'}}>
        <h3>Top Japan Headlines</h3>
      </Link>
      <Link to="/seheadlines" style={{textDecoration: 'none', color: 'black'}}>
        <h3>Top Swedish Headlines</h3>
      </Link>
    </div>
  );
};

export default Home;