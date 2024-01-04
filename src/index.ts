import { router } from "./router";
import { HtmlRenderer } from "./utilities/htmlRender";

const rootDiv = document.getElementById("root");

HtmlRenderer.render(rootDiv, router);


