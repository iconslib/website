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

<svelte:head>
  <script
    defer
    src="https://metrics.bitkidd.dev/hey"
    data-website-id="5bb17685-5ee0-4fb0-958b-62f57488fdec"
  ></script>
</svelte:head>

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
