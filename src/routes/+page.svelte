<script lang="ts">
  import SEO from '$components/global/seo.svelte';
  import FormSearch from '$components/forms/form_search.svelte';
  import HeaderMain from '$components/headers/header_main.svelte';

  import ListFrameworks from '$components/lists/list_frameworks.svelte';
  import ListPacks from '$components/lists/list_packs.svelte';
</script>

<SEO
  title="Open source icons for your next project"
  titleTemplate={`%s - IconsLib`}
  description="A set of open source icons for you next project. High quality, optimized, free."
  openGraph={{
    basic: {
      title: 'Open source icons for your next project',
      type: 'website',
      image: '/share.png'
    },
    optional: {
      siteName: 'iconslib.com',
      description: 'A set of open source icons for you next project. High quality, optimized, free.'
    }
  }}
  twitter={{
    card: 'summary_large_image',
    title: 'IconsLib - Open source icons for your next project',
    description: 'A set of open source icons for you next project. High quality, optimized, free.',
    site: 'iconslib.com',
    image: '/share.png'
  }}
/>

<HeaderMain />

<ListFrameworks />

<div class="mb-10 flex w-full flex-col gap-5">
  <div class="w-full">
    <h1 class="w-full text-2xl font-semibold">Search</h1>
  </div>

  <FormSearch />
</div>

<ListPacks />
