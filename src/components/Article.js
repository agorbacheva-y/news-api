import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from "react";
import Box from "@mui/material/Box";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Article({children}) {
  const navigate = useNavigate();
  const location = useLocation();

  const articles = location.state;
  console.log(articles[0].url);

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
        <ifrmae src={articles[0]?.url}></ifrmae>
      </Box>
    </div>
  );
};

export default Article;

// how to render article external link inside iframe...