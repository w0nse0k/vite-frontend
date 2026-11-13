import "../../components/header";
import { element, errorMessage, fetchJson, record } from "../../utils/lib";
import type { UpsertResult } from "../../utils/types";

hydrateElements();

async function hydrateElements() {
  element<HTMLFormElement>("form1").addEventListener(
    "submit",
    async function (e) {
      e.preventDefault();
      const data = record(this);
      const response = await fetchJson("/api/books", "POST", data);
      if (!response.ok) return await errorMessage(response);
      const result: UpsertResult = await response.json();
      window.location.href = `./view?id=${result.insertId}`;
    },
  );
}
