import { createApp } from "vue";
import renderContent from "../renderContent";
import App from "./App.vue";

renderContent({
  cssPaths: import.meta.PLUGIN_WEB_EXT_CHUNK_CSS_PATHS,
  render: (appRoot) => {
    createApp(App).mount(appRoot);
  },
});
