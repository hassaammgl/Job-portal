import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/portfolio" element={<h1>portfolio</h1>} />
        <Route path="/go" element={<h1>Go</h1>} />
        <Route path="/to" element={<h1>To</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
