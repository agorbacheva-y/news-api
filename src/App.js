import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/UsHeadlines.css';
import Fetch from "./components/Fetch";
import UsHeadlines from "./components/UsHeadlines";
import JpHeadlines from "./components/JpHeadlines";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Fetch />
      </div>

      <Routes>
        <Route path="/" element={<Fetch />} />
        <Route path="/usheadlines" element={<UsHeadlines />} />
        <Route path="/jpheadlines" element={<JpHeadlines />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
