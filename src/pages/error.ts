import { element, params } from "../utils/lib";

renderError();

function renderError() {
  const { message } = params();
  element("error").textContent = message;
}
