import "../../components/header";
import { renderPageBar } from "../../components/pagebar";
import { element, errorMessage, setSessionPage } from "../../utils/lib";
import { type Book } from "../../utils/types";

renderPageBar();
renderMain();
setSessionPage();

async function renderMain() {
  const response = await fetch(`/api/books${location.search}`);
  if (!response.ok) return await errorMessage(response);
  const list = await response.json();
  element("tbody").innerHTML = list
    .map(
      (book: Book) => `
    <tr>
      <td>${book.id}</td>
      <td><a href="./view?id=${book.id}">${book.title}</a></td>
      <td class="text-align-right">${book.price.toLocaleString()}</td>
    </tr>`,
    )
    .join("");
}
