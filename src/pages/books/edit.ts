import "../../components/header";
import {
  element,
  errorMessage,
  fetchJson,
  record,
  searchParams,
} from "../../utils/lib";
import type { Book } from "../../utils/types";

const { id } = searchParams();
await renderMain();
hydrateElements();

async function renderMain() {
  const response = await fetch(`/api/books/${id}`);
  if (!response.ok) return await errorMessage(response);
  const book: Book = await response.json();
  element("content").innerHTML = `
    <form id="form1" class="w-100">
      <ul>
        <li>
          <input type="text" name="title" placeholder="제목" 
            class="w-100" value="${book.title}" required autofocus />
        </li>
        <li>
          <input type="number" name="price" placeholder="가격"
            class="w-100" value="${book.price}" required />
        </li>
        <li>
          <textarea name="description" class="w-100 h-10rem" placeholder="설명" >${book.description}</textarea>
        </li>
        <li>
          <input type="url" name="image" class="w-100"
            placeholder="이미지" value="${book.image}"/>
        </li>
        <li><button type="submit">저장</button></li>
      </ul>
    </form>
  `;
}

async function hydrateElements() {
  element<HTMLFormElement>("form1").addEventListener(
    "submit",
    async function (e) {
      e.preventDefault();
      const data = record(this);
      const response = await fetchJson(`/api/books/${id}`, "PATCH", data);
      if (!response.ok) return await errorMessage(response);
      window.location.href = `./view?id=${id}`;
    },
  );
}
