import { useLocation, useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Article({children}) {
  const navigate = useNavigate();
  const location = useLocation();

  const articles = location.state;
  //console.log(articles[0].url);

  let articleIndex = localStorage.getItem("article index");
  //console.log(articleIndex);

  return (
    <div>
      <Box>
        <header className='article__header'>
          <button 
            type='button'
            className='article__back'
            onClick={() => navigate(-1) }
          >
            <ArrowBackIosIcon/>
            <h3>Back</h3>
          </button>
        </header>
        <iframe src={articles[articleIndex].url} className='iframe'></iframe>
        {children}
      </Box>
    </div>
  );
};

export default Article;