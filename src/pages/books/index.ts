import "../../components/header";
import { element, errorMessage } from "../../utils/lib";
import type { Book } from "../../utils/types";

renderMain();

async function renderMain() {
  const response = await fetch("/api/books?size=10&page=1");
  if (!response.ok) return await errorMessage(response);
  const list = await response.json();
  element("tbody").innerHTML = list
    .map(
      (book: Book) => `
    <tr>
      <td>${book.id}</td>
      <td>${book.title}</td>
      <td class="text-align-right">${book.price.toLocaleString()}</td>
    </tr>`,
    )
    .join("");
}
