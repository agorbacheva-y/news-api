import { Link } from "react-router-dom";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import UsHeadlines from "./UsHeadlines";
import JpHeadlines from "./JpHeadlines";
import SeHeadlines from "./SeHeadlines";
const Home = () => {
  const [ value, setValue ] = useState("1");

  return (
    <>
      <div>
        <TabContext value={value}>
          <Paper square>
            <Tabs
              textColor="primary"
              indicatorColor="primary"
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <Tab label="Tab One" value="1"/>
              <Tab label="Tab Two" value="2"/>
              <Tab label="Tab Three" value="3"/>
            </Tabs>
          </Paper>
          <TabPanel value="1">
              <UsHeadlines />
          </TabPanel>
          <TabPanel value="2">
              <JpHeadlines />
          </TabPanel>
          <TabPanel value="3">
              <SeHeadlines />
          </TabPanel>
        </TabContext>
        
      </div>
      {/* <div className="headline--link">    
        <Link to="/usheadlines" style={{textDecoration: 'none', color: 'black'}}>
          <h3>Top US Headlines</h3>
        </Link>
        <Link to="/jpheadlines" style={{textDecoration: 'none', color: 'black'}}>
          <h3>Top Japan Headlines</h3>
        </Link>
        <Link to="/seheadlines" style={{textDecoration: 'none', color: 'black'}}>
          <h3>Top Swedish Headlines</h3>
        </Link>
      </div> */}
    </>

  );
};

export default Home;