import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UsHeadlines from "./components/UsHeadlines";
import JpHeadlines from "./components/JpHeadlines";
import './styles/UsHeadlines.css';
import './styles/Home.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usheadlines" element={<UsHeadlines />} />
        <Route path="/jpheadlines" element={<JpHeadlines />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
