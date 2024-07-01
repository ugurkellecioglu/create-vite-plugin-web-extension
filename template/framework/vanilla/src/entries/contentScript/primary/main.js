import renderContent from "../renderContent";
import logo from "~/assets/logo.svg";
import "./style.css";

renderContent({
  cssPaths: import.meta.PLUGIN_WEB_EXT_CHUNK_CSS_PATHS,
  render: (appRoot) => {
    const logoImageUrl = new URL(logo, import.meta.url).href;

    appRoot.innerHTML = `
      <div class="logo">
        <img src="${logoImageUrl}" height="50" alt="" />
      </div>
    `;
  },
});
