<script lang="ts">
  import type { PageData } from './$types.js';

  import SEO from '$components/global/seo.svelte';
  import HeaderMain from '$components/headers/header_main.svelte';
  import FormSearch from '$components/forms/form_search.svelte';
  import ItemIcon from '$components/items/item_icon.svelte';

  interface Props {
    data: PageData;
  }

  const { data } = $props();
</script>

<SEO
  title="Search open source icons for your next project"
  titleTemplate={`%s - IconsLib`}
  description="A set of open source icons for you next project. High quality, optimized, free."
  openGraph={{
    basic: {
      title: 'Search open source icons for your next project',
      type: 'website',
      image: '/images/share.png'
    },
    optional: {
      siteName: 'iconslib.com'
    }
  }}
/>

<HeaderMain />

<div class="mb-5 flex w-full flex-col gap-5">
  <div class="w-full">
    <h1 class="w-full text-2xl font-semibold">Search results</h1>
  </div>

  <div class="w-full">
    <FormSearch />
  </div>

  <div class="grid w-full grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-5">
    {#each data.icons as icon}
      <ItemIcon data={icon} withInfo />
    {/each}
  </div>
</div>
