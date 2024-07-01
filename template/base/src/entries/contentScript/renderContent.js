import browser from "webextension-polyfill";

export const reactComponentMap = new Map();

export default async function renderAt({
  render,
  id,
  target = document.body,
  position = "beforeend",
  cssPaths = [],
  contentEditable,
}) {
  const appContainer = document.createElement("div");
  appContainer.contentEditable = !!contentEditable;

  const shadowRoot = appContainer.attachShadow({
    mode: process.env.NODE_ENV === "development" ? "closed" : "closed",
  });
  const appRoot = document.createElement("div");

  if (import.meta.hot) {
    const { addViteStyleTarget } = await import(
      "@ugurkellecioglu/vite-plugin-web-extension/client"
    );

    await addViteStyleTarget(shadowRoot);
  } else {
    cssPaths.forEach((cssPath) => {
      const styleEl = document.createElement("link");
      styleEl.setAttribute("rel", "stylesheet");
      styleEl.setAttribute("href", browser.runtime.getURL(cssPath));
      shadowRoot.appendChild(styleEl);
    });
  }

  shadowRoot.appendChild(appRoot);

  appContainer.id = id;
  appContainer.classList.add(id);
  target?.insertAdjacentElement(position, appContainer);

  const reactComponent = await render(appRoot);

  console.debug("rendered", id, reactComponent);

  reactComponentMap.set(id, appRoot);

  // return react component
  return appRoot;
}
