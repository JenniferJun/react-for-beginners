import { BrowserRouter,Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Coins from "./components/Coins";
import Calculator from "./routes/Calculator";

function App() {
  return ( 
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`/movie/:id`} element={<Detail />}/> 
      <Route path={`/movies`} element={<Home />}/> 
      <Route path={`/coins`} element={<Coins />} />
      <Route path={`/calculator`} element={<Calculator />} />
    </Routes>
  </BrowserRouter>
  );
 }

export default App;