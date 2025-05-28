import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostData from "./components/PostData";
import GetAllData from "./components/GetAllData";
import SinglePost from "./components/SinglePost";
import ProductList from "./components/FakeStore/ProductList";
import GetProduct from "./components/FakeStore/GetProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostData />} />
        <Route path="/get" element={<GetAllData />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<GetProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
