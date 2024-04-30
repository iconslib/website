<script lang="ts">
  import type { PageData } from './$types';
  import { data as frameworks } from '$lib/data/frameworks.json';
  import SEO from '$components/global/seo.svelte';
  import HeaderFramework from '$components/headers/header_framework.svelte';

  interface Props {
    data: PageData;
  }

  const { data }: Props = $props();
  const framework = frameworks.find((el) => el.slug === data.slug)!;
</script>

<SEO
  title={`Open source icons for your next ${framework.title} project`}
  titleTemplate={`%s - IconsLib`}
  description={`A set of open source icons for you next ${framework.title} project. High quality, optimized, free.`}
  openGraph={{
    basic: {
      title: `Open source icons for your next ${framework.title} project`,
      type: 'website',
      image: '/share.png'
    },
    optional: {
      siteName: 'iconslib.com',
      description: `Open source icons for your next ${framework.title} project`
    }
  }}
  twitter={{
    card: 'summary_large_image',
    title: `IconsLib - Open source icons for your next ${framework.title} project`,
    description: `A set of open source icons for you next ${framework.title} project. High quality, optimized, free.`,
    site: 'iconslib.com',
    image: '/share.png'
  }}
/>

<HeaderFramework data={{ framework }} />

<div class="prose max-w-full rounded-lg border-[1px] border-neutral-200 bg-white p-5 lg:p-10">
  {@html data.content.html}
</div>
