<script lang="ts">
  import type { PageData } from './$types';
  import frameworks from '$lib/frameworks';
  import FrameworkHeader from '$components/headers/framework_header.svelte';

  interface Props {
    data: PageData;
  }

  const { data }: Props = $props();
  const framework = frameworks.find((el) => el.slug === data.slug)!;
</script>

<FrameworkHeader {...framework} />
