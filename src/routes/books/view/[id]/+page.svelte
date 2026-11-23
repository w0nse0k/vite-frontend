<script lang="ts">
  import { errorResponse, getSessionPage } from "#lib/functions.ts";
  import type { PageProps } from "./$types";

  const { params, data }: PageProps = $props();

  function handleList() {
    window.location.assign(getSessionPage() ?? "/books");
  }

  async function handleDelete() {
    if (!confirm("삭제하시겠습니까?")) return;
    const response = await fetch(`/api/books/${params.id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      return await errorResponse(response);
    }
    window.location.assign(getSessionPage() ?? "/books");
  }
</script>

<h3>책 상세정보</h3>
<p>
  <a href="/books" class="btn" onclick={handleList}>목록</a>
  <a href="/books/edit/{data.id}" class="btn">편집</a>
  <button onclick={handleDelete}>삭제</button>
</p>
<ul>
  <li class="title">{data.id}. <span class="bold">{data.title}</span></li>
  <li>{data.price?.toLocaleString()} 원</li>
  <li><img src={data.image} alt="" /></li>
  <li class="whitespace-pre-line">{data.description}</li>
</ul>
