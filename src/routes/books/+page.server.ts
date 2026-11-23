import type { PageServerLoad } from "./$types";
import type { Book } from "#lib/types";

export const load: PageServerLoad = async ({ fetch, url }) => {
  const page = url.searchParams.get("page") ?? "1";
  const size = url.searchParams.get("size") ?? "10";
  const response = await fetch(
    `/api/books?${new URLSearchParams({ page, size })}`,
  );
  const list = (await response.json()) as Book[];

  return { list, page, size };
};
