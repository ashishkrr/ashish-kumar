import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter basename="https://ashishkrr.github.io/ashish-kumar">
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
