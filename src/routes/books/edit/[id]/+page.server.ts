import { fail, redirect, type Actions } from "@sveltejs/kit";

export { load } from "../../view/[id]/+page.server";

export const actions: Actions = {
  default: async ({ request, fetch, params }) => {
    const { id } = params;
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const response = await fetch(`/api/books/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      return fail(response.status, { message: await response.text() });
    }
    redirect(303, `/books/view/${id}`);
  },
};
