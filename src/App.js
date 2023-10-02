import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import './styles/UsHeadlines.css';
import './styles/Home.css';
import UsHeadlines from "./components/UsHeadlines";
import JpHeadlines from "./components/JpHeadlines";
import SeHeadlines from "./components/SeHeadlines";
import Article from "./components/Article";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usheadlines" element={<UsHeadlines />} />
        <Route path="/jpheadlines" element={<JpHeadlines />} />
        <Route path="/seheadlines" element={<SeHeadlines />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
