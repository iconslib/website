<script lang="ts">
  import '@fontsource-variable/rubik';
  import '../app.css';

  import Wrapper from '$components/global/wrapper.svelte';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  const { children }: Props = $props();
</script>

<Wrapper class="mb-10">
  {#if children}
    {@render children()}
  {/if}
</Wrapper>

<style>
  :global(body) {
    background-color: theme(backgroundColor.neutral.50);
    text: theme(textColor.neutral.900);
  }
</style>
