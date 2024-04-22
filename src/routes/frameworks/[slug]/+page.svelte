<script lang="ts">
  import type { PageData } from './$types';
  import FrameworkHeader from '$components/headers/framework_header.svelte';

  interface Props {
    data: PageData;
  }

  const { data }: Props = $props();
</script>

<FrameworkHeader {...data.framework} />
