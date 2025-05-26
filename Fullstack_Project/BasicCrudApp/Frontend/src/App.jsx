import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostData from "./components/PostData";
import GetAllData from "./components/GetAllData";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostData />} />
        <Route path="/get" element={<GetAllData />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
