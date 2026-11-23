<script lang="ts">
  import type { ChangeEventHandler } from "svelte/elements";

  let { size = "10", page = "1" } = $props();
  const handleChange: ChangeEventHandler<HTMLFormElement> = (event) =>
    event.currentTarget.requestSubmit();
</script>

<form id="pageform" onchange={handleChange}>
  <p class="flex [&>label]:w-24 [&>label]:flex [&_input]:text-center">
    <label>
      Size:
      <input
        type="number"
        name="size"
        value={size}
        min="10"
        step="5"
        class=""
        required
      />
    </label>
    <label>
      Page:
      <input type="number" name="page" value={page} min="1" step="1" required />
    </label>
  </p>
</form>
