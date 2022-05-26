import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import GameDetails from "./components/GameDetails/GameDetails";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games/:id" element={<GameDetails/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
