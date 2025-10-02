import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";

createRoot(document.getElementById("root")).render(
  <>
    <CustomCursor />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
