<script lang="ts">
  import CancelButton from "#lib/components/CancelButton.svelte";
  import type { PageProps } from "./$types";
  const { data, form }: PageProps = $props();
</script>

<h3>책 수정</h3>
{#if form?.message}
  <p class="text-orange-400">{form.message}</p>
{/if}
<form id="form1" method="POST">
  <ul>
    <li>
      <!-- svelte-ignore a11y_autofocus -->
      <input
        type="text"
        name="title"
        value={data.title}
        placeholder="제목"
        autofocus
      />
    </li>
    <li>
      <input
        type="number"
        name="price"
        value={data.price}
        placeholder="가격"
        required
      />
    </li>
    <li>
      <textarea name="description" class="h-32" placeholder="설명"
        >{data.description}</textarea
      >
    </li>
    <li>
      <input type="url" name="image" value={data.img} placeholder="이미지" />
    </li>
  </ul>
  <p>
    <button type="submit">저장</button>
    <CancelButton />
  </p>
</form>
