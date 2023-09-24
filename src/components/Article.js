import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';

function Article() {
  const [ value, setValue ] = useState("1"); // change to 2 after fix url link

  const navigate = useNavigate();
  const location = useLocation();

  // const title = location.state.usArticles.title;
  // const url = location.state.usArticles.url;


  return (
    <div>
      <TabContext value={value} >
        <Paper square>
          <TabList
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="Back" value="1" onClick={() => navigate(-1) } />
            {/* <Tab label={title} value="2" /> */}
          </TabList>
        </Paper>
      </TabContext>
      {/* {url} */}
    </div>
  );
};

export default Article;