import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import './styles/UsHeadlines.css';
import './styles/Home.css';
import Header from './components/Header';
import UsHeadlines from "./components/UsHeadlines";
import JpHeadlines from "./components/JpHeadlines";
import SeHeadlines from "./components/SeHeadlines";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usheadlines" element={<UsHeadlines />} />
        <Route path="/jpheadlines" element={<JpHeadlines />} />
        <Route path="/seheadlines" element={<SeHeadlines />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
