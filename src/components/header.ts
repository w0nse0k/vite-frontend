import { element } from "../utils/lib";

renderHeader();

function renderHeader() {
  element("header").innerHTML = `
  <ul class="top-nav">
    <li><a href="/">Home</a></li>
    <li><a href="/h/books/">Books</a></li>
  </ul>
`;
}
