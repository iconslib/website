<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    class?: string;
    children?: Snippet;
  }

  const { children, ...rest }: Props = $props();
</script>

<div class={`w-full px-5 xl:px-0 xl:max-w-5xl mx-auto ${rest.class ?? ''}`}>
  {#if children}
    {@render children()}
  {/if}
</div>
