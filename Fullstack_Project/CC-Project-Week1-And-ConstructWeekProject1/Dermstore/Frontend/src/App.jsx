import { BrowserRouter, Route,Routes } from "react-router-dom";
import UserLayout from './Components/Layout/UserLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout/>}>{/*User Layout*/}</Route>
        <Route>{/*Admin Layout*/}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
