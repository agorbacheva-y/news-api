import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import './styles/UsHeadlines.css';
import './styles/Home.css';
import UsHeadlines from "./components/UsHeadlines";
import JpHeadlines from "./components/JpHeadlines";
import SeHeadlines from "./components/SeHeadlines";
import Article from "./components/Article";
import Layout from "./components/Layout";

function App() {
  console.log(window.location.pathname)
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/usheadlines" element={<UsHeadlines />} />
          <Route path="/jpheadlines" element={<JpHeadlines />} />
          <Route path="/seheadlines" element={<SeHeadlines />} />
        </Route>
        <Route path="/article" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
