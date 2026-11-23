import { fail, redirect } from "@sveltejs/kit";
import type { UpsertResult } from "#lib/types.ts";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async ({ request, fetch }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const response = await fetch(`/api/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      return fail(response.status, { message: await response.text() });
    }
    const result = (await response.json()) as UpsertResult;
    redirect(303, `/books/view/${result.insertId}`);
  },
};
