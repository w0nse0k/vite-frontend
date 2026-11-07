/** fetch wrapper: Content-Type: "application/json" */
export function fetchJson(
  url: string,
  method: "POST" | "PUT" | "DELETE",
  data: object = {},
) {
  return fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

/** 엘리먼트 */
export function element<T extends HTMLElement>(id: string) {
  return document.querySelector<T>(`#${id}`)!;
}

/** formData */
export function form(form: HTMLFormElement) {
  return Object.fromEntries(new FormData(form));
}

/** Query params */
export function params() {
  const urlParams = new URLSearchParams(window.location.search);
  return Object.fromEntries(urlParams);
}

/** 현재 경로 */
export function path() {
  return window.location.pathname + window.location.search;
}

/** error 메시지 출력 */
export async function errorMessage(response: Response) {
  element("msg").textContent =
    `${response.status} ${response.statusText}: ${await response.text()}`;
}
