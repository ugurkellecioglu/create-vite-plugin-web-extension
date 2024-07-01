import { render } from "preact";
import renderContent from "../renderContent";
import App from "./App";

renderContent({
  cssPaths: import.meta.PLUGIN_WEB_EXT_CHUNK_CSS_PATHS,
  render: (appRoot) => {
    render(<App />, appRoot);
  },
});
