import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
       <div className="headline--link">
        <Link to="/usheadlines">US</Link>
        <Link to="/jpheadlines">Japan</Link>
        <Link to="/seheadlines">Sweden</Link>
      </div>
    </div>
  )
}

export default Header
