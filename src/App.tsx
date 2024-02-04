import "./App.css";
import Landing from "./pages/Landing";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="https://ashishkrr.github.io">
       <Routes>
        <Route path="/" element={<Landing/>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
