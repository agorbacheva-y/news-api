import {useLocation} from 'react-router-dom';
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';

function Article() {
  const location = useLocation();

  const title = location.state.usArticles;
  console.log(usArticles);


  return (
    <div>
      <TabContext>
        <Paper square>
          <TabList
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="Back"/>
            <Tab label={title} />
          </TabList>
        </Paper>
      </TabContext>
      {url}
    </div>
  );
};

export default Article;