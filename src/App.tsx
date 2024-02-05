import "./App.css";
import Landing from "./pages/Landing";
import { HashRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
       <Routes>
        <Route path="/" element={<Landing/>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
