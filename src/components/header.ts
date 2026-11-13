import { element } from "../utils/lib";

renderHeader();

function renderHeader() {
  element("header").innerHTML = `
  <ul class="top-nav">
    <li><a href="/">Home</a></li>
    <li><a href="/books/?size=10&page=1">Books</a></li>
  </ul>
`;
}
