import { element, searchParams } from "../utils/lib";

export function renderPageBar() {
  const params = searchParams();
  element("pagebar").innerHTML = `
    <form id="pageform">
      <p>
      <label>Size:</label>
      <input type="number" name="size" value="${params.size ?? 10}" min="10" step="5" class="w-100px text-align-center" required/>
      <label>Page:</label>
      <input type="number" name="page" value="${params.page ?? 1}" min="1" step="1" class="w-100px text-align-center" required/>
      </p>
    </form>
  `;

  element<HTMLFormElement>("pageform").addEventListener("change", function () {
    this.requestSubmit();
  });
}
