<script lang="ts">
  import type { PageData } from './$types';
  import { data as frameworks } from '$lib/data/frameworks.json';
  import HeaderFramework from '$components/headers/header_framework.svelte';

  interface Props {
    data: PageData;
  }

  const { data }: Props = $props();
  const framework = frameworks.find((el) => el.slug === data.slug)!;
</script>

<HeaderFramework {...framework} />

<div class="prose max-w-full rounded-lg border-[1px] border-neutral-200 bg-white p-5 lg:p-10">
  {@html data.content.html}
</div>
