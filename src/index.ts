import { router } from "./router";
import { HtmlRenderer } from "./utilities/htmlRender";

const rootDiv = document.getElementById("root");

window.addEventListener('load', () => {
  HtmlRenderer.render(rootDiv, router);
});
