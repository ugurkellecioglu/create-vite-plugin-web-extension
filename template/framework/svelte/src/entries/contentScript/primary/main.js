import renderContent from "../renderContent";
import App from "./App.svelte";

renderContent({
  cssPaths: import.meta.PLUGIN_WEB_EXT_CHUNK_CSS_PATHS,
  render: (appRoot) => {
    new App({
      target: appRoot,
    });
  },
});
