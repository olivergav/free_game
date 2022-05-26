import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games/:id" element={<h1>siema</h1>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
