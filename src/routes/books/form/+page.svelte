<script lang="ts">
  import CancelButton from "#lib/components/CancelButton.svelte";
  import type { PageProps } from "./$types";

  const { form }: PageProps = $props();
</script>

<h3>책 등록</h3>
{#if form?.message}
  <p class="text-orange-400">{form.message}</p>
{/if}
<form id="form1" method="POST">
  <ul>
    <li>
      <!-- svelte-ignore a11y_autofocus -->
      <input type="text" name="title" placeholder="제목" required autofocus />
    </li>
    <li>
      <input type="number" name="price" placeholder="가격" required />
    </li>
    <li>
      <textarea name="description" class="h-32" placeholder="설명"></textarea>
    </li>
    <li>
      <input type="url" name="image" placeholder="이미지" />
    </li>
  </ul>
  <p>
    <button type="submit">등록</button>
    <CancelButton />
  </p>
</form>
