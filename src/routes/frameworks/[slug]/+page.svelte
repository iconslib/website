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
