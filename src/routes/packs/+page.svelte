<script lang="ts">
  import SEO from '$components/global/seo.svelte';
  import FormSearch from '$components/forms/form_search.svelte';
  import HeaderMain from '$components/headers/header_main.svelte';

  import ListPacks from '$components/lists/list_packs.svelte';
</script>

<SEO
  title="Available icon packs"
  titleTemplate={`%s - IconsLib`}
  description="A set of open source icons for you next project. High quality, optimized, free."
  openGraph={{
    basic: {
      title: 'Available icon packs',
      type: 'website',
      image: '/images/share.png'
    },
    optional: {
      siteName: 'iconslib.com'
    }
  }}
/>

<HeaderMain />

<div class="mb-10 flex w-full flex-col gap-5">
  <div class="w-full">
    <h1 class="w-full text-2xl font-semibold">Search</h1>
  </div>

  <FormSearch />
</div>

<ListPacks />
