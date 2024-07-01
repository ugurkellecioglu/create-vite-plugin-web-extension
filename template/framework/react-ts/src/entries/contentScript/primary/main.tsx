import "../../enableDevHmr";
import React from "react";
import ReactDOM from "react-dom/client";
import renderContent from "../renderContent";
import App from "./App";

renderContent({
  cssPaths: import.meta.PLUGIN_WEB_EXT_CHUNK_CSS_PATHS,
  render: (appRoot) => {
    ReactDOM.createRoot(appRoot).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  },
});
