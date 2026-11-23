/** fetch wrapper: Content-Type: "application/json" */
export function fetchJson(
  url: string,
  method: "POST" | "PATCH" | "DELETE",
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

/** formData를 record로 */
export function record(form: HTMLFormElement) {
  const formData = new FormData(form);
  return Object.fromEntries(formData);
}

/** formData를 queryString으로 */
export function queryString(form: HTMLFormElement): string {
  return new URLSearchParams(record(form) as Record<string, string>).toString();
}

/** search params */
export function searchParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return Object.fromEntries(urlParams);
}

/** 현재 경로 */
export function path() {
  return window.location.pathname + window.location.search;
}

/** error 메시지 출력 */
export async function errorResponse(response: Response) {
  element("msg").textContent =
    `${response.status} ${response.statusText}: ${await response.text()}`;
}

export function errorMessage(message: string = "") {
  element("msg").textContent = message;
}

/** 현재 페이지 세션에 저장 */
export function setSessionPage() {
  sessionStorage.setItem("page", path());
}

/** 현재 페이지 세션에서 꺼내기 */
export function getSessionPage() {
  return sessionStorage.getItem("page");
}

/** Data 타입 예쁘게 표현 */
export function prettyDate(date: string) {
  return new Date(date).toLocaleString("sv-SE");
}
