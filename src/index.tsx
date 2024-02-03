import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  ScreenTypeProvider,
  ScrollAndMenuProvider,
} from "./providers/ScreenTypeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ScreenTypeProvider>
    <ScrollAndMenuProvider>
      <App />
    </ScrollAndMenuProvider>

    {/* <React.StrictMode>
      
    </React.StrictMode> */}
  </ScreenTypeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
