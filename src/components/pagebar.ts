import { element, queryString, searchParams } from "../utils/lib";

export function renderPageBar() {
  const params = searchParams();
  element("pagebar").innerHTML = `
    <form id="pageform">
      <p>
      <label>Size:</label>
      <input type="number" name="size" value="${params.size}" min="10" step="5" class="w-100px text-align-center" required/>
      <label>Page:</label>
      <input type="number" name="page" value="${params.page}" min="1" step="1" class="w-100px text-align-center" required/>
      </p>
    </form>
  `;

  element<HTMLFormElement>("pageform").addEventListener("change", function () {
    location.href = `./?${queryString(this)}`;
  });
}
