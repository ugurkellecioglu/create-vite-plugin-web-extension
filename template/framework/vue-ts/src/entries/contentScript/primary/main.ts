import { createApp } from "vue";
import renderContent from "../renderContent";
import Primary from "./App.vue";

renderContent({
  cssPaths: import.meta.PLUGIN_WEB_EXT_CHUNK_CSS_PATHS,
  render: (appRoot: HTMLElement) => {
    createApp(Primary).mount(appRoot);
  },
});
