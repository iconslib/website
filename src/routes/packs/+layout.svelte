<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { LayoutData } from './$types';
  import SEO from '$components/global/seo.svelte';

  interface Props {
    data: LayoutData;
    children: Snippet;
  }

  const { data, children }: Props = $props();
</script>

<SEO
  title={`${data.pack?.title}`}
  titleTemplate={`%s - IconsLib`}
  description={`A set of open source icons for you next project. High quality, optimized, free.`}
  openGraph={{
    basic: {
      title: `Open source icons for your next project`,
      type: 'website',
      image: '/share.png'
    },
    optional: {
      siteName: 'iconslib.com'
    }
  }}
/>

{#if children}
  {@render children()}
{/if}
