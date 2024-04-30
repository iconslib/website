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
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
  <link rel="manifest" href="/favicon/site.webmanifest" />

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
