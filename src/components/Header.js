import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

function Header() {
  return (
    <div className="header">
      <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
        <HomeIcon />
      </Link>
    </div>
  );
};

export default Header;
