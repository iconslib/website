<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    class?: string;
    children?: Snippet;
  }

  const { children, ...rest }: Props = $props();
</script>

<div class={`mx-auto w-full px-5 xl:max-w-5xl xl:px-0 ${rest.class ?? ''}`}>
  {#if children}
    {@render children()}
  {/if}
</div>
