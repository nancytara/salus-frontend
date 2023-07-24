import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap-utilities/bootstrap-utilities.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(<App />);
