import type { PageServerLoad } from "./$types";
import type { Book } from "#lib/types";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ fetch, params }) => {
  const { id } = params;
  const response = await fetch(`/api/books/${id}`);
  if (!response.ok) {
    error(response.status, await response.text());
  }
  const book = (await response.json()) as Book;

  return book;
};
