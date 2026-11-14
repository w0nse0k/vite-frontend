import "../../components/header";
import {
  element,
  errorMessage,
  fetchJson,
  getSessionPage,
  searchParams,
} from "../../utils/lib";
import type { Book } from "../../utils/types";
import escapeHtml from "escape-html";

const { id } = searchParams();
await renderMain();
hydrateElements();

async function renderMain() {
  const response = await fetch(`/api/books/${id}`);
  if (!response.ok) return await errorMessage(response);
  const book: Book = await response.json();
  element("content").innerHTML = `
    <p><a href="${getSessionPage()}">목록</a> <a href="./edit?id=${id}">편집</a> <button id="del">삭제</button></p>
    <ul class="info">
      <li class="title">${book.id}. <span class="bold">${escapeHtml(book.title)}</span></li>
      <li>${book.price.toLocaleString()} 원</li>
      <li><img src="${escapeHtml(book.image)}" class="w-max-100"/></li>
      <li class="pre-line text-align-justify">${escapeHtml(book.description)}</li>
    </ul>
  `;
}

function hydrateElements() {
  element("del").addEventListener("click", async () => {
    if (!confirm("삭제하시겠습니까?")) return;
    const response = await fetchJson(`/api/books/${id}`, "DELETE");
    if (!response.ok) return await errorMessage(response);
    window.location.href = getSessionPage() ?? "./";
  });
}
