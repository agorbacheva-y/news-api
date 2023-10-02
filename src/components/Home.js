import { Link } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import UsHeadlines from "./UsHeadlines";
import JpHeadlines from "./JpHeadlines";
import SeHeadlines from "./SeHeadlines";

const Home = () => {
  const [ value, setValue ] = useState("1");

  return (
    <>
      <UsHeadlines />
      {/* <div>
        <TabContext value={value}>
          <Box>
            <TabList
              textColor="primary"
              indicatorColor="primary"
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <Tab label="US" value="1"/>
              <Tab label="Japan" value="2"/>
              <Tab label="Sweden" value="3"/>
            </TabList>
          </Box>
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
        
      </div>*/}
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