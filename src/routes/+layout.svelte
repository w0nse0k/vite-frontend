<script lang="ts">
  import "./layout.css";
  import favicon from "#lib/assets/favicon.svg";
  import type { LayoutProps } from "./$types";

  let { children }: LayoutProps = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<nav>
  <a href="/">Home</a><a href="/books/?size=10&page=1">Books</a>
</nav>

<main>
  {@render children()}
  <p id="msg" class="text-orange-400">메시지</p>
</main>
