import { BrowserRouter,Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Coins from "./components/Coins";
function App() {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      <Route path="/movie/:id" element={<Detail />}/> 
      <Route path="/movies" element={<Home />}/> 
      <Route path="/coins" element={<Coins />} />
    </Routes>
  </BrowserRouter>
  );
 }

export default App;