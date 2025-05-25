import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostData from "./components/PostData";
import GetAllData from "./components/GetAllData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostData />} />
        <Route path="/get" element={<GetAllData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
