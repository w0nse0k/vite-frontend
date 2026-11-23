<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import { setSessionPage } from "#lib/functions.ts";
  import type { PageProps } from "./$types";
  import Pagebar from "#lib/Pagebar.svelte";

  const { data }: PageProps = $props();
  afterNavigate(() => setSessionPage());
</script>

<h3>책 목록</h3>
<p><a href="/books/form" class="btn">책 등록</a></p>
<Pagebar size={data.size} page={data.page} />
<table>
  <thead>
    <tr class="title">
      <th>번호</th>
      <th>제목</th>
      <th>가격</th>
    </tr>
  </thead>
  <tbody id="tbody">
    {#each data.list as book (book.id)}
      <tr>
        <td>{book.id}</td>
        <td><a href="/books/view/{book.id}">{book.title}</a></td>
        <td class="text-right">{book.price.toLocaleString()}</td>
      </tr>
    {/each}
  </tbody>
</table>
