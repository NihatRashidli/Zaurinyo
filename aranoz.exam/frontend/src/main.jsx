import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import Store, { persistor } from "./redux/store/Store.js";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
